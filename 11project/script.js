document.addEventListener("DOMContentLoaded", () => {
    const musicBtn = document.getElementById("musicBtn");
    const podcastsBtn = document.getElementById("podcastsBtn");
    const liveBtn = document.getElementById("liveBtn");
    const content = document.getElementById("content");

    const musicContent = `
        <div class="p-2 bg-gray-200 rounded">React Rendezvous</div>
        <div class="p-2 bg-gray-200 rounded">Async Awakenings</div>
        <div class="p-2 bg-gray-200 rounded">The Art of Reusability</div>
        <div class="p-2 bg-gray-200 rounded">Stateful Symphony</div>
    `;

    const podcastsContent = `
        <div class="p-2 bg-gray-200 rounded">Tech Talks</div>
        <div class="p-2 bg-gray-200 rounded">AI Insights</div>
        <div class="p-2 bg-gray-200 rounded">Web Dev Weekly</div>
        <div class="p-2 bg-gray-200 rounded">Design Diaries</div>
    `;

    const liveContent = `
        <div class="p-2 bg-gray-200 rounded">Live Jazz Session</div>
        <div class="p-2 bg-gray-200 rounded">Indie Rock Performance</div>
        <div class="p-2 bg-gray-200 rounded">Classical Evening</div>
        <div class="p-2 bg-gray-200 rounded">EDM Festival</div>
    `;

    function updateContent(type) {
        content.innerHTML = type;
    }

    musicBtn.addEventListener("click", () => updateContent(musicContent));
    podcastsBtn.addEventListener("click", () => updateContent(podcastsContent));
    liveBtn.addEventListener("click", () => updateContent(liveContent));
});
