/**
 * プロジェクト情報の型定義
 * マークダウンファイルのfrontmatterとして使用される
 */
export interface Project {
  /** プロジェクトの一意な識別子（URL slugとして使用） */
  name: string;
  /** プロジェクトのタイトル */
  title: string;
  /** プロジェクトの短い説明文 */
  description: string;
  /** プロジェクトの作成日（形式: YYYY/MM/DD） */
  createdAt: string;
  /** プロジェクトのジャンル（例: Webアプリケーション、CLIツールなど） */
  genre: string;
  /** GitHubリポジトリのURL（オプション） */
  github?: string;
  /** プロジェクトのサイトURL（オプション） */
  site?: string;
  /** 使用した技術スタック */
  technology: string[];
  /** プロジェクトの目的 */
  objective: string;
  /** プロジェクトの背景・動機 */
  background: string;
  /** プロジェクトでこだわった点 */
  commitment: string;
  /** ギャラリーに表示する画像のファイル名リスト */
  gallery: string[];
  /** プロジェクトをピン留めするかどうか */
  pin?: boolean;
}

/**
 * スキル情報の型定義
 */
export interface Skill {
  /** スキルのタイトル */
  title: string;
  /** 好き度（1-5） */
  favorite: number;
}
