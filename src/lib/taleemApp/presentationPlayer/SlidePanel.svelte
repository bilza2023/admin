<script>
    export let slidesList;
    export let setCurrentSlide;
    export let moveUp;
    export let moveDown;

</script>
    
{#if slidesList && slidesList.length > 0}
    {#each slidesList as item, itemIndex (itemIndex)}
        <div 
            class="stack-panel-item"
            class:selected={item.selected  == true}
        >
            <button 
                class="stack-panel-selector" 
                on:click={() => setCurrentSlide(itemIndex)}
            >
                {String(item.type || '').toUpperCase().slice(0, 7)}
            </button>

            <div class="stack-panel-actions">
                
                <div class="stack-panel-move-buttons" style="min-height:15px">
                    {#if item.selected  == true}
                    <button 
                        class="stack-panel-move-button"
                        on:click={moveDown}
                    >
                    ↓
                    </button>

                    <button 
                        class="stack-panel-move-button"
                        on:click={moveUp}
                    >
                    ↑
                    </button>
                {/if}
                </div>
            </div>

        </div>
    {/each}
{:else}
    <div class="stack-panel-empty">No Slides</div>
{/if}
  
    
<style>
    .stack-panel-item {
        text-align: center;
        border: 2px solid #737c89;
        border-radius: 10px;
        margin: 1px;
        transition: background-color 0.3s;
    }
    
    .stack-panel-item.selected {
        border-color: white;
        opacity: 1;
        background-color: goldenrod;
    }
    
    .stack-panel-item:hover {
        background-color: rgb(201, 175, 109);
    }
    
    .stack-panel-selector {
        background-color: #4a5568;
        color: white;
        padding: 0.25rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        margin: 0.25rem;
    }
    
    .stack-panel-actions {
        display: flex;
        justify-content: center;
        margin-top: 0.25rem;
    }
    
    .stack-panel-move-buttons {
        display: flex;
        justify-content: center;
        gap: 0.25rem;
    }
    
    .stack-panel-move-button {
        background-color: #4a5568;
        color: white;
        padding: 0.25rem;
        border-radius: 0.25rem;
    }
    
    .stack-panel-empty {
        text-align: center;
        color: #718096;
        padding: 1rem;
    }
    </style>