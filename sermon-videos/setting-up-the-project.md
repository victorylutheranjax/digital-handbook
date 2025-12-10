---
outline: deep
---

# Setting Up the Project

## Video Editor

This guide assumes you have the DaVinci Resolve video editor from BlackMagicDesign (BMD). It can be downloaded for free [here](https://www.blackmagicdesign.com/products/davinciresolve). However, this software may be too advanced for some users, and, generally speaking, any video editor will do. Many of the concepts from this guide will apply to most video editors.

This guide will not go over how to install or run DaVinci Resolve. You can find instructions for that on [BMD's support page](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion).

## File Structure

File structure is important in DaVinci Resolve and most other video editors. It's good practice to keep all media relevant to your project in one master folder, with subfolders as desired. This guide will often make reference of the "root media folder", which is the master file that contains all your project media.

## Project Setup

### Importing Media

1. Open DaVinci Resolve.

2. On the "Projects" screen, make sure the "Local" tab is selected. Click "New Project" in the lower right.

3. Give your project a name, then click create.
   ::: info Note
   You can change where your project is saved, but it is generally not recommended unless there is a good reason to do so.
   :::

4. Once the project has been created, ensure you are on the "Cut" tab, found in the bottom middle of the screen. Ensure also that the "Media Pool" is selected in the upper left corner of the screen.

5. Click the "Import Media Folder" icon in the upper left of the screen.

6. In the file picker, find and select your root media folder. Click "Select Folder".

7. Once DaVinci has finished importing the root media folder, the "Media Pool" area should populate with the subfolders in the root media folder.
   ::: info Note
   You can see where you are in the file structure of your project by looking at the breadcrumbs above the "Media Pool". You can also navigate by clicking one of the breadcrumbs.
   :::

### Creating a Boilerplate

Our boilerplate project will include intro and end cards, as well as music to bookend the sermon. It is up to the user to supply graphics and audio for these purposes.

::: info Note
A boilerplate is not required to make one of these videos, but it will make repeated processes like these sermon videos much faster to set up and edit in the future. Additionally, you may choose to use different parts of the boilerplate (e.g., no music). The editing process will be largely the same, though some future steps in this guide may be different if all the boilerplate parts are not present.
:::

1. On the "Cut" tab, in the Media Pool, find the intro card in the file system.

2. Drag the graphic onto the timeline below the file system.
   ::: info Note
   You can drag the clip onto the timeline itself or the timeline overview band in the middle of the editor.
   :::

3. To change the length of the graphic either click and drag the right (or left) edge of the clip or right click on the clip and click "Change clip duration...".
   ::: tip Tip
   Five seconds is generally a good clip duration for intro and end cards.
   :::

4. Repeat steps 1 and 2 for the end card, leaving a little space between the intro and end card clips on the timeline.

5. Repeat steps 1 and 2 for the intro and outro music. Drop the music below the graphics clips on the timeline.
   ::: tip Tip
   Due to the nature of the music clips, they will likely be much longer by default than the graphics clips. Be sure to trim them to a duration of a few seconds. It's a good idea to give them about twice the duration of the graphics clips.
   :::

6. Align the start of the intro card with the start of the intro music by dragging the clips on the timeline.

7. Align both the intro graphic and music to the beginning of the timeline.

8. Align the end of the outro card with the end of the outro music by dragging the clips on the timeline.

9. Ensure there is still space between the intro and outro clips.
   ::: info Note
   The exact amount of space isn't important, just that there's enough to drop the sermon clip in between.
   :::

10. Navigate to the "Edit" tab.

11. Select both the outro graphic and the outro music. Right click on one of them and click "Link clips" in the context menu.

12. Hover over the intro music clip. Two white tabs should appear, one in each top corner.
    ::: info Note
    These tabs designate where audio should end fading in (top left tab) or begin fading out (top right tab). This is intuitively displayed by partially fading out the clip, mimicking the audio's behavior.
    :::

13. Grab the right tab and drag it left, towards the beginning of the clip.
    ::: tip Tip
    Since this tab designates where audio starts fading out, choose a spot one or two seconds after the clip starts.
    :::
    ::: tip Tip
    Currently, the audio fades out linearly. If you want a more gradual or a sharper fade out, use the knob that appears halfway between the tab you dragged and the end of the clip.
    :::

14. Repeat steps 12 and 13 for the outro music, mirroring the instructions so that the audio fades in, instead of out.

15. In the "Toolbox" in the lower left corner of the editor, click "Video Transitions".

16. Drag and drop "Cross Dissolve" or a transition of your choice onto the beginning of the intro graphic clip and the end of the outro clip.

The boilerplate is now complete. Future videos will build off of this baseline and are as simple as swapping out the content between the intro and outro clips.
