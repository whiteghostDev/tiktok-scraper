/**
 * Represents the audio of the video!
 */

export interface IMusic {
  /**
   * tiktok music ic
   */
  id: number;
  /**
   * tiktok music title
   */
  title: string;
  /**
   * direct link to this music
   */
  playURL: string;
  /**
   * tiktok music original cover
   */
  coverLarge: string;
  /**
   * tiktok music thumnail cover
   */
  coverThumb: string;
  /**
   * tiktok music author
   */
  author: string;
  /**
   * tiktok music duration
   */
  duration: number;
  /**
   * Whether the music is original or user made
   */
  original?: boolean;
  /**
   * Whether it is part of an Album
   */
  album?: string;
}
