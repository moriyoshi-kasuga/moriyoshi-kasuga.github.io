const projects: Project[] = [
  {
    name: 'Portfolio-v1',
    title: '一代目ポートフォリオ',
    description: 'Next.js 製一代目ポートフォリオです',
    cretedAt: '2024/12/26',
  },
  {
    name: 'dotfiles',
    title: 'dotfiles',
    description: 'コマンド一行でdotfilesを適用',
    cretedAt: '2023/8/12',
    developmentType: '個人開発',
    genre: 'CLI',
    persona: 'pcを初期化する人',
    github: 'https://github.com/moriyoshi-kasuga/dotfiles',
    technology: ['shellscript'],
    objective:
      'windowsのwslを時々初期化するためいちいち手動でやるのもめんどくさいため、コマンド一行でdotfilesを適用できるようにした。(macも対応,一応linuxもできるはず)',
    background:
      '実は夏からやっているのですが、結構あとで個人情報がのっているのに気づいたのでそのときにcommit全部リセットしたのでコミット数が異常に減りました。(現在 38commit だけど本当は150commitぐらいあると思う。shellscriptがかなり難しかった)',
    commitment: '本当にコマンドを一行一回たたくだけで自分の環境を構築できます。',
    gallery: ['main.png'],
    content:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  },
];

export default projects;
