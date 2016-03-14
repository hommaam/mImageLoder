# mImageLoader plug-in
ページ内の画像を遅延読み込みするjQueryプラグインです。

This is jQuery plug-in that it will load images with later.


## デモ/Demo
http://hommaam.github.io/mImageLoader/


## 使用方法/How to use
jQuery本体の読み込み後、jquery.mImageLoader.jsを読み込みます。

遅延読み込みさせたい`<img>`要素は、`src`属性ではなく`data-src`属性に画像のURLを記述します。
読み込ませたいタイミングで、対象とするjQueryオブジェクトのメソッドとしてmImageLoaderを実行します。
関数として実行する場合は、引数に対象要素のセレクタ、もしくはjQueryオブジェクトを指定します。

You should write the url not as `src` attribute but as `data-src` attribute in the `<img>` element that will be loaded with later.
Call mImageLoader as method of jQuery object as you want to load images.
You can also call mImageLoader as function with the attribute as selector of target or jQuery object.

## サンプル/Sample


```
	<img data-src="http://placehold.jp/150x150.png" alt="">
```
