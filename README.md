# SUSURANAI
ラーメンを食べた日を記録し、節度あるラーメン生活を送るためのアプリです！！  
食べたラーメンの総カロリーなども計算することができます！

[recording.webm](https://github.com/user-attachments/assets/837c3b87-a5d1-4b09-9efd-06939431593d)

Dohack team2 のリポジトリ  
頑張りましょう！！！！！！！！！！！！！！！

- [開発の進め方](#開発の進め方)
  - [環境構築編](#環境構築編)
  - [開発の進め方編](#開発の進め方編)

# 開発の進め方

## 環境構築編

> [!NOTE]
> Git、GitHub のキホンを知っておくことをオススメします！  
> npm, git はインストールされているものとして進めます。

<!-- omit from toc -->
#### 1. 開発ディレクトリを起きたい場所に移動 ("C:\user\example\\...\\" は書き換えてください)

```
cd C:\user\example\...\
```

ターミナルの入力する部分の近くに現在いるディレクトリが書いてあります。  
`cd` を実行するとそれが変わるはずです！

<!-- omit from toc -->
#### 2. このリポジトリを自分の pc にクローンします

```
git clone https://github.com/kotek-7/dohack-2
```

これでこのリポジトリが現在いるディレクトリに複製されました！

<!-- omit from toc -->
#### 3. クローンしたディレクトリに移動します

```
cd dohack-2
```

また現在いるディレクトリが変わったのがわかると思います。  
`ls` と打つと、現在位置にあるファイルなどの一覧が見れます。

<!-- omit from toc -->
#### 4. package.json に書かれたパッケージを全部インストール！

```
npm install
```

先ほど試しに `ls` を打ってみた人は、ディレクトリに package.json というファイルが入っていたのが分かると思います。  
実は、 `git clone` した段階では、ディレクトリにパッケージ一覧の書いてある package.json が追加されるだけで、パッケージ本体はまだインストールされていません。 `npm install` をすることで、npm が package.json に書いてあるパッケージを読み取って、全部インストールしてくれます！

`npm install` が終わったら、 `ls` を実行してみると node_modules というディレクトリが現在位置に追加されているのが分かると思います。このディレクトリにパッケージの本体が入っています！

ここまでで環境構築は完了です！！！！！！！  
実際に動かしてみましょう！

<!-- omit from toc -->
#### 5. 実行してみる

```
npm run dev
```

http://localhost:5173/ などと表示されて、ターミナルがずっと実行中になると思います。これで今、このリンクにアクセスすれば web アプリにアクセスすることができます！  
ターミナルを終了したり、ターミナル上で q + Enter などを押せば、実行が終わって、上のリンクにアクセスしても何も表示されなくなります。何度か実行してみましょう！

## 開発の進め方編

実際に開発を進めていきましょう！  
vscode を開いて、File → Open Folder からクローンした dohack-2 ディレクトリを開きます。すると左側のエクスプローラが下の写真のようになっているかと思います。(色はついてないかもしれません)

![alt text](https://raw.githubusercontent.com/kotek-7/MyImages/main/dohack-2/screenshot1.png)

コードはほとんど src ディレクトリの中に書いていきます。  
その中でも主に使うのが下のディレクトリたちです。

- components
  - ページや UI の部品などの.vue ファイルを入れていきます。
- styles
  - css を書く .css ファイルを入れていきます。
- assets
  - 画像などのリソースを入れていきます。

このディレクトリ構造は今後変わったり深化したりするかもしれないです。

<!-- omit from toc -->
### 作業を始める

作業を始める前に！！！
Git の機能でブランチというのがあります。他のメンバーの作業をミスで消しちゃった！なんてことのないように、作業は**自分のブランチを切って**行いましょう。

1. まず `cd` で dohack-2 のディレクトリに移動します。
2. `git branch` で現在のブランチを確認できます。master ブランチになっているかと思います。
3. `git checkout -b <ブランチ名>` でブランチを新しく作成して切り替えます。  
   ここで、ブランチ名は **dev/<自分と分かる名前>** にすることにします！例えば dev/kotek などです。各々<ブランチ名>のところを書き換えてください！
4. 再び `git branch` をしてちゃんとブランチが切り替わっているか確認します。

ブランチ切りは完了です！  
自由にコードを書いていきましょう。

<!-- omit from toc -->
### コミットする

作業は、小さな区切りで適宜コミットしていきましょう。VSCode の機能を使ってコミットすると楽です。コミットしてもまだ変更は自分のパソコンにしかありません。

<!-- omit from toc -->
### プルする

自分が作業している間にもリモートリポジトリにはどんどん変更がされています。プッシュする前のタイミングで、最新の master ブランチをローカルの自分のブランチに取り込みましょう！
`git pull origin master` でプルすることができます。このとき、リモートと自分が同じ箇所を変更していた場合は、競合が発生したとしてエラーで失敗するので、ローカルで競合を解決してその変更をコミットしてから、再度 `git pull origin master` を打ちます。
競合の解決については、エラーが出たとき git が手順を教えてくれます！

<!-- omit from toc -->
### プッシュする

プッシュすることで変更をアップロードしてメンバーと共有することができます！1日1回くらいを目安にプッシュしていきましょう。  
プッシュすると、リモートの自分のブランチに変更が保存されます。ブラウザで Github を開いて自分のコードが反映されているのを確認しましょう！(master ブランチではなく自分のブランチを見ているのを確認してください！)

開発は、コードを書く、コミット、プッシュを繰り返して行っていきます！

<!-- omit from toc -->
### プルリクを送る

プッシュすることでコードをアップロードすることはできましたが、master ブランチにはまだ反映されていません。自分のブランチを master ブランチにマージする必要がありますが、ミスなどを防ぐために自分ではマージできないようになっています。  
そこで使うのが、Github の**プルリクエスト**という機能です！

まず、プルリクを送る前に `git pull origin master` を行って、最新の master を自分のブランチに取り込んでおきましょう。競合が発生した場合は「プルする」の章と同じように解決します。

プルリクエストは完全に Github 上で行うことができます。プルリクエストをすると他のメンバーにコードレビューの依頼が届きます。他のメンバーが変更を承認したなら、ブランチを master にマージできるようになります。プッシュのたびに毎回プルリクを送るのがオススメです。
