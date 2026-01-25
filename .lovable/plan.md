

# Update Social Sharing Images to Use Logo

## Overview

Update the Open Graph and Twitter meta tags in `index.html` to use the same image as the favicon, ensuring WhatsApp and social media previews display your logo instead of the default image.

## Current State

| Meta Tag | Current Image |
|----------|---------------|
| `og:image` | `.../social-images/social-1769347266258-fb profile@3x.png` |
| `twitter:image` | `.../social-images/social-1769347266258-fb profile@3x.png` |
| `favicon` | `.../uploads/1769347141167-fdfd@3x copy.png` |

## Changes

### File: `index.html`

**Lines 19-20** - Update both image meta tags:

```html
<!-- Before -->
<meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/6Q6GCiPTpPNCgNUhK0gK0FsAXpG2/social-images/social-1769347266258-fb profile@3x.png">
<meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/6Q6GCiPTpPNCgNUhK0gK0FsAXpG2/social-images/social-1769347266258-fb profile@3x.png">

<!-- After -->
<meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/6Q6GCiPTpPNCgNUhK0gK0FsAXpG2/uploads/1769347141167-fdfd@3x copy.png">
<meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/6Q6GCiPTpPNCgNUhK0gK0FsAXpG2/uploads/1769347141167-fdfd@3x copy.png">
```

## Result

After this change, when your site URL is shared on:
- WhatsApp
- Facebook
- Twitter/X
- LinkedIn
- Slack
- Discord

...the preview will display your logo image instead of the default placeholder.

## Note

Social platforms cache images aggressively. After publishing, you may need to:
1. Use Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) to refresh the cache
2. Wait 24-48 hours for WhatsApp to pick up the new image
3. Use Twitter's [Card Validator](https://cards-dev.twitter.com/validator) to refresh Twitter previews

