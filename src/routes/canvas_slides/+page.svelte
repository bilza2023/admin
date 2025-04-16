
<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import Toolbar from "./toolbar/Toolbar.svelte";
  import { toast} from '@zerodevx/svelte-toast';
  import { Assets, loadImages } from "$lib/taleemApp/taleem-canvas";
  import slidesData from './data';
  import CanvasPlayer from "../../lib/taleemApp/CanvasModule/CanvasPlayer/CanvasPlayer.svelte"
  import getCanvasSlideImages from "$lib/taleemApp/app/getPresentationImages/getCanvasSlideImages";

  let slide = null;
  let assets = null;
  let slideName = '';

  onMount(async () => {
    const queryParams = get(page).url.searchParams;
    slideName = queryParams.get('slide');
    debugger;
    if (slideName && slidesData[slideName]) {
      slide = slidesData[slideName];
      let imagesUrl = "/images/";
      const images = getCanvasSlideImages(slide);
      const imagesMap = await loadImages(images, imagesUrl);
      assets = new Assets(imagesMap);
    }
    // if (slide) {
    //   try {
    
    //     let imagesUrl = "/images/";
    //     const images = getCanvasSlideImages(slide);
    //     const imagesMap = await loadImages(images, imagesUrl);
    //     assets = new Assets(imagesMap);

    //   } catch (error) {
    //     console.error(`Error loading slide ${slideName}:`, error);
    //   }
    // }
  });

  function copy() {
    localStorage.setItem("canvas_slide_template", JSON.stringify(slide));
    toast.push("copied!");
  }
</script>

{#if slide && assets}
  <Toolbar {copy} />
  <CanvasPlayer itemLiterals={slide.items} {assets} background={slide.slideExtra} />
{:else if slideName}
  <p>Slide {slideName} could not be loaded</p>
{:else}
  <p>No slide specified in URL. Add ?slide=slide0 to the url</p>
{/if}