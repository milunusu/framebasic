const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
   
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta property="og:title" content="basictest">
    
            <meta property="og:image" content="https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmW9hoQXMaqs9U29dWiZWujPmq1NkPkinqr6xruTjg8tMw">
        
            <meta property="fc:frame" content="vNext">
            <meta property="fc:frame:image" content="https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmW9hoQXMaqs9U29dWiZWujPmq1NkPkinqr6xruTjg8tMw">
            <meta property="fc:frame:image:aspect_ratio" content="1.91:1">

            <meta property="fc:frame:button:1" content="Start">
            <meta property="fr:frame:post_url" content="https://maroon-able-dolphin-503.mypinata.cloud/ipfs/QmPRmhLgJUETG2SDDrNDSiaiztDPF2EWYsbkGFmEzytxq7">
          

            <title>basictest</title>
        </head>
        <body>
            <h1>basictest</h1>
          
        </body>
        </html>
    `;

    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
