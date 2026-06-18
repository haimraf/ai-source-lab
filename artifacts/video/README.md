# XRP explainer video renders

- Source composition: `videos/xrp/index.ts`
- Editorial source page: `app/claims/xrp-global-currency/page.tsx`
- Vertical output: `artifacts/video/xrp-global-currency-vertical.mp4` (1080x1920)
- Landscape output: `artifacts/video/xrp-global-currency-landscape.mp4` (1920x1080)
- Duration and frame rate: 60 seconds at 30 FPS
- Narration status: optional. The render driver enables audio only when all six generated MP3 files exist; otherwise it produces caption-complete silent videos.

Generate optional narration after setting `ELEVENLABS_API_KEY` and `ELEVENLABS_VOICE_ID`:

```powershell
node --strip-types videos/xrp/generate-voiceover.ts
```

Render both outputs:

```powershell
npm run video:render
```

On Windows, the render driver reuses Microsoft Edge when available. Otherwise Remotion uses its configured browser.
