function delay(callback) {
    setTimeout(function() {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                // Extracting post titles and passing to callback
                const titles = data.posts.map(post => post.title).join(', ');
                callback(titles);
            });
    }, 5000); 
}

// Adding event listener to button
document.getElementById('callbackBtn').addEventListener('click', function() {
    delay(function(result) {
        document.getElementById('output').innerText = result;
    });
});
