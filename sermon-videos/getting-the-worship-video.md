# Getting the Worship Video

The end-result of this project will be a standalone sermon video, suitable for watching or listening. In order to achieve this, we first start with the full worship video. The first thought that may come to mind is simply downloading the video from YouTube, since that option is available in YouTube Studio. However, for some unknown reason, YouTube caps the download quality at 720p, which is unsuitable for our needs. Fortunately, there are a few fixes for this.

## Direct Method <Badge type="tip" text="Recommended" />

By far the easiest method of obtaining the file is getting it from the recording device that the ATEM uses.

1. Copy or move the file from the external recording device onto your computer.
   ::: info Note
   As of July 2025, the recording device (an external SSD) used with the ATEM is formatted such that it will only work with an Apple computer. If you wish to edit the video on another operating system, first upload the video to a cloud-based drive on the Apple computer, then download it on whatever computer you will use to edit it.
   :::

## Download Method

::: info Note
This section assumes you are working in Windows.
:::

There are many, many tools to download a video from YouTube. While the method below may not be the most user friendly, it is reliable and safe (some websites which claim to download YouTube videos may expose your system to malware).

::: warning Note
While you can trust the instructions given here, it's important to do your own research and always check downloaded files with antivirus software before opening (or before downloading, if possible).
:::

1. Download Yt-dlp. You can find the latest version [here](https://github.com/yt-dlp/yt-dlp).
   ::: tip Tip
   Yt-dlp, Ffmpeg, and Deno have detailed installation instructions. However, you don't necessarily need to install the programs onto your system. Simply having them downloaded somewhere on your system (in the same folder) will be sufficient for our purposes.
   :::

2. Download Ffmpeg. You can find Yt-dlp-compatible versions [here](https://github.com/yt-dlp/FFmpeg-Builds#ffmpeg-static-auto-builds).

3. Download Deno. You can find the latest version [here](https://github.com/denoland/deno/releases).

4. Once Yt-dlp, Ffmpeg, and Deno are downloaded and saved in the same folder, open your command prompt (press the Windows (@grid-2x2@) and 'R' keys, then type `cmd` and press Enter).

5. Navigate to the folder containing Yt-dlp and ffmpeg using the following command:

   ```txt
   > cd FILE_PATH
   ```

   ::: info Note
   Replace "FILE_PATH" with the path to the folder containing Yt-dlp, Ffmpeg, and Deno. For example: `cd C:\Example_Folder`
   :::

6. Download the video in the highest available quality using the following command:
   ```txt
   > yt-dlp -f 'bestvideo+bestaudio/best' --merge-output-format mp4 URL
   ```
   ::: info Note
   Replace "URL" with the URL of the YouTube video you are trying to download.
   :::

## Fallback Method

If neither of these methods are available, or if the user is not comfortable with them, as a last resort, the video can be obtained in lower quality from YouTube Studio.

1. Go to [YouTube Studio](https://studio.youtube.com/) and log in.

2. In the sidebar, navigate to the "Content" section.

3. Since you are downloading a video that was originally livestreamed, navigate to the "Live" tab.

4. Hover over the video you wish to download. Click the options (@ellipsis-vertical@) button.

5. Click "Download".

## FAQ

::: details Command Prompt doesn't recognize 'yt-dlp' as a command. What do I do?
This is likely because the name of the executable you downloaded is not exactly 'yt-dlp' or because you are not in the correct folder. When running the command above, ensure the file path shown is the correct path to the folder containing yt-dlp, then replace 'yt-dlp' with whatever the exact name of your executable is (i.e. 'yt-dlp_x86').
:::
