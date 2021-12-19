import React, { Component } from "react";
import "./Manual.css";

class Manual extends Component {
  render() {
    return (
      <div class="box">
        <p class="title">CSVテキスト変換ツールについて</p>
        <p>ファイルをCSV変換するツールではありません。</p>
        <p>
          エクセルファイルの値をダブルクォーテーション、カンマ区切りでテキスト出力するツールです。
        </p>
        <p class="title">使い方</p>
        <p>１：エクセルファイルでテキスト化したい列範囲を以下に入力します。</p>
        <p>
          ２：以下出力されたテキストをエクセルファイル１行目の末列に貼り付けします。
        </p>
        <p>
          ３：エクセルファイルにて末列に貼り付けたテキストを必要分オートフィルします。
        </p>
        <p>
          ４：オートフィルしたデータをすべてコピーし、テキストファイル等に貼り付けると、
          <br />
          ダブルクォーテーション、カンマ区切りデータの完成です。
        </p>
      </div>
    );
  }
}

export default Manual;
