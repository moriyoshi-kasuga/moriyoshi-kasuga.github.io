const projects: Project[] = [
  {
    name: 'portfolio-v1',
    title: '一代目ポートフォリオ',
    description: 'Next.js製 一代目ポートフォリオ',
    cretedAt: '2024/12/26',
    genre: 'Web Site',
    github: 'https://github.com/moriyoshi-kasuga/portfolio',
    site: 'https://morilab.vercel.app/',
    technology: ['Next.js', 'TypeScript'],
    objective: 'Moriってこんな人を知ってもらうため',
    background:
      'シンプルほど難しいと思ったので、邪魔にならない程度にアニメーションを付けました。',
    commitment: '全体的に雰囲気を統一するためにフォントには気をつけました。',
    content: `これが二個目のWebSiteにしてはかなりできているのではと自分では満足しています。
ある程度参考にしたサイトはありますがちゃんと雰囲気は全てのページ統一してオリジナリティができたいると思っています。`,
    // TODO: あと画像だけ と Google Slide
    gallery: ['main.png', 'sub.png'],
  },
  {
    name: 'dotfiles',
    title: 'dotfiles',
    description: 'コマンド一行でdotfilesを適用',
    cretedAt: '2023/8/12',
    genre: 'CLI',
    github: 'https://github.com/moriyoshi-kasuga/dotfiles',
    technology: ['shellscript'],
    objective: 'windowsではwsl2を使っていて時々、初期化するのでそのために作りました。',
    background:
      '最初は自分の開発環境をまとめているという事に惹かれて単純にdotfileだけを作っていました。',
    commitment:
      '大体のdotfileはファイルをまとめているだけか手順が必要なのでそれに対して全部makeでできるようにしました',
    content: `本当は6月ぐらいから書いていたんですけど、間違えて.gitignoreに個人情報のファイルを書いていなかったのでそれまでのLogを全部消してしまいました。
その時はまだgitを学び始めたばっかだったのでそれぐらいしか知らなかったんですよね、今思うと本当に馬鹿なことしたなと思います。
(多分shellscriptを頑張って書いている100コミットぐらいが全部飛びました)`,
    gallery: ['neovim.png', 'telescope.png', 'cdr.png', 'history.png'],
  },
  {
    name: 'ryama-v1',
    title: '一代目RYAMA',
    description: 'Markdownを書くwebapp',
    cretedAt: '2023/7/19',
    genre: 'Web App',
    github: 'https://github.com/moriyoshi-kasuga/RYAMA',
    technology: ['Django', 'Python', 'Javascript', 'HTML', 'CSS'],
    objective: 'Djangoを学んでいて、Mardkownを書くのにハマっていたので作る事にしました。',
    background: '完成に近づくとJavaScriptしか書いていなかったです。',
    commitment: 'JavaScriptを使って、ページをリロードしなくてもいいようにしました。',
    content: `RYAMAは Rainbow Yonder Adorn Markdown Application(どこからでも虹のように飾れるマークダウンアプリ)と命名したのですが全くの名前詐欺ですね、
一応二代目を作ろうとしています。(諦めてこのポートフォリオを作ったので作っているかは分かりませんが)`,
    gallery: ['image.png','explorer.png'],
  },
];

export default projects;
