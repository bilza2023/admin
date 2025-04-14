<script lang="ts">
  import { API_URL, ajaxPost } from "$lib/config";
  import { toast } from "@zerodevx/svelte-toast";
  import { onMount } from "svelte";
  import DD from "../../lib/taleemApp/app/DD.svelte";
  import {exerciseNumbersList} from "../../lib/taleemApp/app/exerciseNumbersList";
  ////////////////////////////////
  let presentations;
  ////////////////////////////////
  // let chapterItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  let exerciseItems = exerciseNumbersList;
  ////////////////////////////////
  // let chapter = 1;
  let exercise = "1.1";

  ////////////////////////////////
  onMount(async () => {
   await getData();
  });

  async function getData(){
    try {
      //   debugger;
      const incommingPresentationResponse = await ajaxPost(
        `${API_URL}/presentation/readMany`,
        {
          tcode:"fbise9math",
          // chapter,
          exercise,
        }
      );
      //....
      if (incommingPresentationResponse.ok) {
        presentations = await incommingPresentationResponse.json();
      } else {
        console.error("Failed to fetch presentation");
        toast.push("Failed to load presentation.");
      }
    } catch (error) {
      console.error("Error during onMount:", error);
      // Optionally set some error state to display to the user
    }
  }
  // function setChapter(val){
  // chapter = parseInt(val);
  // console.log("chapter",chapter);
  // }

  function setExercise(val){
    exercise = val;
    console.log("exercise",exercise);
  }

</script>

<div class="flex justify-center text-white pt-4 pb-4">
    <h1 class="text-3xl border-2 border-white py-1 px-8 rounded-md ">Syllabus</h1>
</div>

<!-- Selection Elements -->
<div class="flex gap-2 justify-center pt-5 pb-5 bg-slate-700">
  <!-- <h1 class="text-white">Chapter</h1> -->
  <!-- <DD items={chapterItems} selectedValue={chapter} onSelect={setChapter}/> -->
  <h1 class="text-white">Exercise</h1>
<DD items={exerciseItems} selectedValue={exercise} onSelect={setExercise}/>
<button class="load-button" on:click={getData}>Load</button>
</div>
<!-- ----------------------------------------- -->


<div class="p-4  bg-gray-800">
  {#if presentations}
    <div class="card-container">
      {#each presentations as presentation}
   
        <div class="card">
          <div class="card-header">Ex#{presentation.exercise} Q#{presentation.questionNo}-{presentation.part}</div>
          <!-- <div class="card-body">
            <h1>{presentation.id}</h1>
            </div> -->
            <div class="flex justify-around gap-2 ">
              <a class="text-white rounded-md px-4" href="/editor?id={presentation.id}">Edit</a>
              <a class="text-white rounded-md px-4" href="/player?id={presentation.id}">Play</a>
            </div>
        </div>
      {/each}
    </div>
  {/if}
  
</div> 

  <style>
    .card-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px; /* Adjust spacing between cards */
    }
  
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden; /* Ensure header doesn't overflow rounded corners */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
      width: 300px; /* Adjust card width as needed */
    }
  
    .card-header {
      background-color: #f0f0f0;
      color: #333;
      padding: 12px;
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
    }
  
    .card-body {
      padding: 16px;
    }
    .load-button {
    background-color: #007bff; /* Primary blue color */
    color: white;
    padding: 5px 80px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  .load-button:hover {
    background-color: #0056b3; /* Darker shade of blue on hover */
  }

  .load-button:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); /* Optional focus highlight */
  }

  .load-button:active {
    background-color: #004085; /* Even darker shade when active */
  }
    h1 {
      margin-top: 0; /* Remove default top margin for h1 inside card body */
    }
  </style>