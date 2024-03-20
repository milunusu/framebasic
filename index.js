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
    
            <meta property="og:image" content="https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/0.jpg">
        
            <meta property="fc:frame" content="vNext">
            <meta property="fc:frame:image" content="https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/0.jpg">
            <meta property="fc:frame:image:aspect_ratio" content="1.91:1">

            <meta property="fc:frame:button:1" content="so mediocre">
            <meta property="fc:frame:button:1:action" content="link">
            <meta property="fc:frame:button:1:link" content="https://onchainkit.xyz/frame/frame-metadata">
          

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
