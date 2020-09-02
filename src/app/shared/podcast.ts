export interface Podcast {
  title?: string;
  episode?: EpisodesInfo;
}

export interface EpisodesInfo {
  date?: string;
  description?: string;
  episodeName?: string;
  runTime?: string;
  speaker?: string;
}
