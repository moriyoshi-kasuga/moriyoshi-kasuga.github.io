const projects: Project[] = [
  {
    name: 'portfolio-v1',
    title: '一代目ポートフォリオ',
    description: 'Next.js 製一代目ポートフォリオです',
    cretedAt: '2024/12/26',
    developmentType: '個人開発',
    genre: 'Web Site',
    github: 'https://github.com/moriyoshi-kasuga/portfolio',
    technology: ['Next.js','TypeScript'],
    objective: 'Moriってこんな人を知ってもらうため',
    background: 'まだウェブサイトなどを作った経験が少ないためあまりサイトのスタイルに自信がないですけど、とりあえず自分が納得できるようにして作り切りました',
    commitment: 'hoverしたときなどに軽くアニメーションというか動きをつけてふわっとした感じにしました',
    gallery: ['main.png'],
    content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
  },
  {
    name: 'ryama-v1',
    title: '一代目RYAMA',
    description: 'Django製一代目のRYAMAです',
    cretedAt: '2023/7/19',
    developmentType: '個人開発',
    genre: 'Web App',
    github: 'https://github.com/moriyoshi-kasuga/RYAMA',
    technology: ['Django', 'Python', 'Javascript', 'HTML', 'CSS'],
    objective: '自分が最初にwebappをDjangoで作るときにMarkdownでメモを書くことにはまっていたため、マークダウンに関するwebappを作ることにしてこれを作りました。',
    background: 'DjangoではReactのように動的更新ができないため、javascriptを頑張って書きました。(今はNext.jsでryama-v2を作ろうとしています)',
    commitment: 'javascriptでページを更新しなくてもファイルの作成などの動的更新を再現しました',
    gallery: ['main.png'],
    content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
  },
  {
    name: 'dotfiles',
    title: 'dotfiles',
    description: 'コマンド一行でdotfilesを適用',
    cretedAt: '2023/8/12',
    developmentType: '個人開発',
    genre: 'CLI',
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
