<script>
    import InputSelect from "./components/InputSelect.svelte";   
    import InputCheckbox from "./components/InputCheckbox.svelte";   
    import InputColor    from "./components/InputColor.svelte";   
    import InputNumber   from "./components/InputNumber.svelte";   
    import InputText     from "./components/InputText.svelte";   
    
    export let selectedItem;  
    export let images;  
    export let imagesDBList=[];  


</script>
    
<div class="container">
    <h1 class="input" style="text-align: center;">{selectedItem.itemData.name}</h1>
    
    <table class="table">
        
        <InputText caption="name" bind:value={selectedItem.itemData.name} />
       
        <InputSelect caption="Images" bind:value={selectedItem.itemData.src} options={images} />
       
        <InputSelect caption="Available" bind:value={selectedItem.itemData.src} options={imagesDBList} />
        
        
        <InputNumber caption="Opacity" bind:value={selectedItem.itemData.opacity}
            config={{min:0, max:1, step:0.1}} />
    </table>
</div><!--container-->    
    
<style>
    .container {
        padding: 8px;
        margin: 4px;
        border: 1px solid #333;
        border-radius: 12px;
        color: white;
        background-color: #222;
        max-width: 280px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    .input {
        background-color: #2a2a2a;
        color: white;
        padding: 5px 8px;
        margin: 2px 0;
        border: 1px solid #444;
        border-radius: 4px;
        width: 100%;
        font-size: 0.9rem;
        width: auto;
    }
    
    .table {
        width: 100%;
        max-width: 250px;
        border-collapse: collapse;
        margin-bottom: 10px;
        background-color: #1a1a1a;
        border-radius: 8px;
        overflow: hidden;
        padding-top: 0px;
    }
</style>