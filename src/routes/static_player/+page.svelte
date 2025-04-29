
<script lang="ts">
  //29-Apr-2024 :Since every thing is important so everything must be final.
  import { API_URL, ajaxPost, ajaxGet } from "$lib/config/";
  import { presentationData} from "./presentation_data";
  import { toast } from "@zerodevx/svelte-toast";
  import { Assets,type IAssets,loadImages} from "../../lib/taleemApp/taleem-canvas";
  import Player from "../../lib/taleemApp/presentationPlayer/Player.svelte";
  import { onMount } from "svelte";
  import getPresentationImages from "../../lib/taleemApp/app/getPresentationImages/getPresentationImages";
  import ProjectToolbar from "$lib/ProjectToolbar.svelte";
//////////////////////////////
    let slides=null;
    let assets:IAssets | null =null;
    let images = ["atom.png","baloons.png","activity1.jpg","drops.png"];
    let imagesUrl   = "/images/";//if needed take it out of onmount
////////////////////////////////
onMount(async () => {
  try { // Added try-catch block for onMount
  
      let presentation = {};
      presentation.slides = presentationData;
      // const imagesUrl = "/images/"; // Consider if this should be outside onMount
      images = getPresentationImages(presentation.slides);
      const imagesMap = await loadImages(images, imagesUrl);
      assets = new Assets(imagesMap);
      slides = presentation.slides;
  
      } catch (error) {
        console.error("Error during onMount:", error);
        // Optionally set some error state to display to the user
      }
    });
</script>
<ProjectToolbar />
{#if slides && assets}
<!----ASS-I-(just AS assets,slides and no images, save)--->
<Player slides={slides} {assets}  />
{/if}
