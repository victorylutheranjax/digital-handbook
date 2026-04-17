---
outline: deep
---

# Setting Up the Project

## Video Editor

This guide assumes you have the DaVinci Resolve video editor from BlackMagicDesign (BMD). It can be [downloaded for free here](https://www.blackmagicdesign.com/products/davinciresolve). However, this software may be too advanced for some users, and, generally speaking, any video editor will do. Many of the concepts from this guide will apply to most video editors.

This guide will not go over how to install or run DaVinci Resolve. You can find instructions for that on [BMD's support page](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion).

## Template Project Setup

### Importing Media

1. Open DaVinci Resolve.

2. On the "Projects" screen, make sure the "Local" tab is selected. Click "New Project" in the lower right.

3. Give your template project a name, then click create.
   ::: info Note
   You can change where your project is saved, but it is generally not recommended unless there is a good reason to do so.
   :::

4. Once the project has been created, ensure you are on the "Cut" tab, found in the bottom middle of the screen. Ensure also that the "Media Pool" is selected in the upper left corner of the screen.

5. Click the "Import Media" icon in the upper left of the screen.

6. In the file picker, find and select the files you plan to reuse for each video.

7. Once DaVinci has finished importing the media, the "Media Pool" area should populate.

### Creating a Boilerplate

Our boilerplate project will include intro and end placeholders, as well as music to bookend the sermon. It is up to the user to supply graphics and audio for these purposes.

::: info Note
A boilerplate is not required to make one of these videos, but it will make repeated processes like these sermon videos much faster to set up and edit in the future. Additionally, you may choose to use different parts of the boilerplate (e.g., no music). The editing process will be largely the same, though some future steps in this guide may be different if all the boilerplate parts are not present.
:::

1. On the "Edit" tab, in the Toolbox, find the "Solid Color" generator.

2. Drag the generator onto the timeline below the preview to create the introduction placeholder. Rename the generated clip for clarity.

3. To change the length of the clip, either click and drag the right (or left) edge of the clip or right click on the clip and click "Change clip duration...".

4. Repeat steps 1, 2, and 3 for the title card, main sermon body, and end card. Instead of a Solid Color generator, the outro graphic may be used if available.
   ::: tip Tip
   Five seconds is generally a good clip duration for intro and end cards.
   :::

5. Find the intro/outro music in the Media Pool. Drop the music below the graphics clips on the timeline.
   ::: tip Tip
   Due to the nature of the music clips, they will likely be much longer by default than the graphics clips. Be sure to trim them to a sensible duration.
   :::

6. Align the start of the intro placeholder with the start of the intro music by dragging the clips on the timeline.

7. Align both the intro placeholder and music to the beginning of the timeline.

8. Align the end of the outro card with the end of the outro music by dragging the clips on the timeline.

9. Select both the outro graphic and the outro music. Right click on one of them and click "Link clips" in the context menu.

10. Hover over the intro music clip. Two white tabs should appear, one in each top corner.
    ::: info Note
    These tabs designate where audio should end fading in (top left tab) or begin fading out (top right tab). This is intuitively displayed by partially fading out the clip, mimicking the audio's behavior.
    :::

11. Grab the right tab and drag it left, towards the beginning of the clip.
    ::: tip Tip
    Since this tab designates where audio starts fading out, choose a spot one or two seconds after the clip starts.
    :::
    ::: tip Tip
    Currently, the audio fades out linearly. If you want a more gradual or a sharper fade out, use the knob that appears halfway between the tab you dragged and the end of the clip.
    :::

12. Repeat steps 12 and 13 for the outro music, mirroring the instructions so that the audio fades in, instead of out.

13. In the "Toolbox" in the lower left corner of the editor, click "Video Transitions".

14. Drag and drop "Cross Dissolve" or a transition of your choice onto the beginning of the intro graphic clip and the end of the outro clip.

15. Right-click the area to the left of the timeline in one of the video tracks and select "Add Track".

16. In the Toolbox, find the "Middle Lower Third" title and drag it onto the newly-created track to create the intro caption.

17. In the inspector, adjust the font, color, text content, and position to the desired settings.

18. Resize the intro caption in the timeline so that its duration matches that of the introduction.

The boilerplate is now complete. Future videos will build off of this baseline and are as simple as swapping out the content between the intro and outro clips.
