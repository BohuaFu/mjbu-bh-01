addEventListener("fetch", (event) => {
  const response = new Response("Hello World!, My Name is BohuaFu, Nice to meet you...", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
