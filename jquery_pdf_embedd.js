$(function(){
//hrefに拡張子.pdfで終わるパスが入ってるaタグを取得
 var $a_pdf = $('a[href$=".pdf"]');
 
 //aタグがあるごとに繰り返す
    $a_pdf.each(function () {
        var $this = $(this);
        var $url = $this.attr('href');
        var $a_pdf_text = $this.text();
        
        //iframeの前にダウンロードリンクを設置
        $this.addClass('media_btn pdf').attr('target', '_blank');
        
        //iframeを出力
        $this.after('<iframe src="' + $url + '" class="iframe_pdf"></iframe>');
        
        //デザイン目的：iframeの枠に見出しを付ける
        $this.next('.iframe_pdf').before('<p class="iframe_caption">PDFプレビュー | ' + $a_pdf_text + '</p>');
    });
});

//デザインはcssでお好みのようにどうぞ
