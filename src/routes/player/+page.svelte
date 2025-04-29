
<script lang="ts">
  //29-Apr-2024 :Since every thing is important so everything must be final.
  import { API_URL, ajaxPost, ajaxGet } from "$lib/config/";
 
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
    let soundFileName = null;
////////////////////////////////      
////////////////////////////////
onMount(async () => {
  try { // Added try-catch block for onMount
  
    const id = new URLSearchParams(location.search).get("id");
    const incommingPresentationResponse = await ajaxGet(`${API_URL}/presentation/read/${id}`);
//....
    if (incommingPresentationResponse.ok) {
 
      let presentation = await incommingPresentationResponse.json();
      // const imagesUrl = "/images/"; // Consider if this should be outside onMount
      images = getPresentationImages(presentation.slides);
      const imagesMap = await loadImages(images, imagesUrl);
      assets = new Assets(imagesMap);
      slides = sortBySortOrder(presentation.slides);
////////////////////////////////////////////////////////////////////////////////

soundFileName = await getSoundFile(presentation.filename);
////////////////////////////////////////////////////////////////////////////////
    } else {
      console.error("Failed to fetch presentation");
      toast.push("Failed to load presentation.");
    }
      } catch (error) {
        console.error("Error during onMount:", error);
        // Optionally set some error state to display to the user
      }
    });
    function sortBySortOrder(slides){
    return slides.slice().sort((a, b) => a.sortOrder - b.sortOrder);
  }
  async function getSoundFile(filename) {
 
  const customPath = '/sounds/' + filename + '.opus';
  try {
    const res = await fetch(customPath, { method: 'HEAD' });
    return res.ok ? customPath : '/sounds/music.opus';
  } catch {
    return '/sounds/music.opus';
  }
}

</script>
<ProjectToolbar />
{#if slides && assets && soundFileName}
<!----ASS-I-(just AS assets,slides and no images, save)--->
<Player slides={slides} {assets}  {soundFileName} />
{/if}
