# node-red-contrib-ambient Node-REDのAmbientノード

## Ambient
[Ambient](https://ambidata.io)はIoTクラウドサービスで、センサーデーターを受信し、蓄積し、可視化(グラフ化)します。
node-red-contrib-ambientはAmbientにデーターを送信するNode-REDノードです。

## インストール

Node-REDのルートディレクトリーで次のようにインストールしてください。

```sh
$ npm install node-red-contrib-ambient
```

## 使い方

事前に[Ambient](https://ambidata.io)にユーザー登録(無料)し、チャネルを生成してください。

AmbientノードをNode-REDにインストールすると、パレットの「advanced」カテゴリーにAmbientノードが追加されます。
ノードをワークスペースにドラッグし、ダブルクリックして、データーを送信するAmbientチャネルのチャネルIdとライトキーを設定してください。

## Ambientへのデーター送信

Ambientには次のようなJSONフォーマットでデーターを送ります。

```javascript
{"d1":データー1, "d2":データー2, "d3":データー3, ...}
```

センサーデーターを上のようなJSONフォーマットにしてmsg.payloadにセットし、Ambientノードに送信してください。

## データーの確認

送信したデーターは[Ambient](https://ambidata.io)サイトで確認することができます。
