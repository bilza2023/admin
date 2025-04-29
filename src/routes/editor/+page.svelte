<script lang="ts">
  /**
   * Since everything is important, everything must be final.
   * 7-Apr-2025: The Final Time I am finalizing db_editor. This should not need changes any further.
   */
  import { API_URL, ajaxPost, ajaxGet } from "$lib/config/";
  import {Assets,type IAssets,loadImages} from "$lib/taleemApp/taleem-canvas";
  import Editor from "$lib/taleemApp/presentationEditor/Editor.svelte";
  import { onMount } from "svelte";
  import canvasSlideRemoveAllHandles from "$lib/taleemApp/app/canvasSlideRemoveAllHandles";
  import getPresentationImages from "$lib/taleemApp/app/getPresentationImages/getPresentationImages";
  import { imagesDBList } from "$lib/taleemApp/app/imagesDBList";
  import { toast } from "@zerodevx/svelte-toast";
  import ProjectToolbar from "$lib/ProjectToolbar.svelte";

  ///////////////////////////////////////////////////////////////////////////
  let slides: any[] | null = null; 
  let presentation: any = null; 
  let assets: IAssets | null = null;
  let images = [];
  let id=null;
  //////////////////////////////////////////////////////////////////////////
  onMount(async () => {
    
    id = new URLSearchParams(location.search).get("id");
    const incommingPresentationResponse = await ajaxGet(`${API_URL}/presentation/read/${id}`);
//....
    if (incommingPresentationResponse.ok) {
      presentation = await incommingPresentationResponse.json();
      const imagesUrl = "/images/"; // Consider if this should be outside onMount
      images = getPresentationImages(presentation.slides);
      const imagesMap = await loadImages(images, imagesUrl);
      assets = new Assets(imagesMap);
      slides = sortBySortOrder(presentation.slides);
    } else {
      console.error("Failed to fetch presentation");
      toast.push("Failed to load presentation.");
    }
  });

  function sortBySortOrder(slides){
    return slides.slice().sort((a, b) => a.sortOrder - b.sortOrder);
  }
  async function save() {
    debugger;
    // let slides = presentation.slides;
     //////sort order
     for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      slide.sortOrder = i;
    }
//////////////////////////////////////////////    
    const eqSlidesData: any[] = []; // Explicitly type eqSlidesData
    const canvasSlidesData: any[] = []; // Explicitly type canvasSlidesData
    
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      if (slide.type === "canvas") {
        canvasSlideRemoveAllHandles(slide.items);
        canvasSlidesData.push(slide);
      }
      if (slide.type === "eqs") {
        eqSlidesData.push(slide);
      }
    }

///////////////////////////////////////

///////////////////////////////////////
    const result = await ajaxPost(`${API_URL}/presentation/update`, {
      presentationId: presentation.id,
      presentationData: presentation,
      eqSlidesData,
      canvasSlidesData,
    });
    if (result.ok) {
      toast.push("Saved!");
    } else {
      toast.push("Failed to save presentation.");
    }
  }

  // async function newPresentation() {
  //   const presentationData = {
  //     tcode: "fbise9math",
  //     chapter: 1,
  //     exercise: "99.99",
  //     filename: "thisissomegilename",
  //     questionNo: 99,
  //     part: 666,
  //     name: "name001",
  //     questionType: "free",
  //     status: "final",
  //     sortOrder: 0,
  //     comments: "",
  //     tags: "",
  //   };
  //   // let presentationData = {
  //   // tcode: "==>newTcode",
  //   // chapter: 1,
  //   // exercise: "99.99",
  //   // filename: "==>thisisanewname",
  //   // questionNo: 22,
  //   // part: 333,
  //   // name: "==>somename",
  //   // questionType: "free",
  //   // status: "final",
  //   // sortOrder: 0,
  //   // comments: "=>sss",
  //   // tags: "",
  //   // };

  //   const result = await ajaxPost(`${API_URL}/create`, {
  //     presentationData,
  //     eqSlidesData: [],
  //     canvasSlidesData: [],
  //   });
  //   if (result.ok) {
  //     // debugger;
  //     toast.push("New Presentation Created!");
  //   } else {
  //     toast.push("Failed to create new presentation.");
  //   }
  // }
</script>

<ProjectToolbar />
{#if slides}
  <Editor bind:slides {assets} {images} {save} {imagesDBList} {id}/>
{/if}
