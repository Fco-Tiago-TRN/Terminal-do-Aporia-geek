export interface FileItem {
  id: string;
  title: string;
  url: string;
  date?: string;
}

export interface FolderData {
  id: string;
  name: string;
  description: string;
  icon: 'book' | 'game' | 'atom' | 'archive';
  color: 'cyan' | 'purple' | 'lime' | 'magenta';
  files: FileItem[];
}