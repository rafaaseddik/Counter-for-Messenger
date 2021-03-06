var html_pattern = `
<head>
<meta charset="UTF-8"></head>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">

<style>
  body{
    margin: 1.2em;
	
    background: linear-gradient(45deg,rgba(170, 224, 255, 0.17),rgba(120, 255, 120, 0.44),rgba(110, 255, 85, 0.4),rgba(247, 255, 130, 0.6)),linear-gradient(-45deg,#DAF1FF,#F3D8B6,rgba(123, 182, 255, 0.32),#FCFFD2);
	
	background: linear-gradient(45deg,rgba(211, 239, 255, 0.42),rgba(182, 243, 182, 0.44),rgba(143, 255, 123, 0.4),rgba(252, 255, 210, 0.48)),linear-gradient(-45deg,#DAF1FF,#F3D8B6,rgba(255, 123, 214, 0.17),#FCFFD2);
	background-attachment: fixed;
  }
  .container{
    width: 40%;
    min-width: 450px;
    max-width: 800px;
    margin: auto;
    background: rgba(255, 255, 255, 0.48);
    overflow: auto;
    padding: 1.0em 2em 1.6em 2em;
  }
  .title {
    text-align:center;
    color: #58636B;
    font-size:15px;
    padding-bottom: 13px;
    border-bottom: 1px solid rgba(0, 0, 0, .10);
  }
  .outer {
    background: #FFFCDD;
    word-break: break-all;
    max-width: 70%;
	background: #FFFBD4;
    padding: 0.6em 1.2em;
    border-radius: 12px;
    margin: 11px;
    clear: both;
    float: left;
    color: #58636B;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.09);
	position: relative;
  }
  .outer:hover {
    background: #FFF8B5;
  }
  .outer.right {
    float: right;
    background: #BDFFCB;
	background: #E6E5DF;
  }
  .outer.right:hover {
    background: #D6D5CB;
  }
  .outer > div:after {
    content: attr(title);
    position: absolute;
    bottom: -1.5em;
    left: 1em;
    font-size: 0.8em;
    color: #5C6D86;
    display: block;
    width: 15em;
	opacity: 0;
	transition: 0.2s all;
	transform: translateY(-3px);
	visibility: hidden;
  }
  .outer.right > div:after{
    left: initial;
    right: 1em;
    text-align: right;
  }
  .outer:hover > div:after {
    opacity: 1;
	transform: translateY(0);
	visibility: visible;
  }
  @media screen and (max-width: 569px) {
    .container{
	  min-width: initial;
      width: 85%;
	}
  }
  #define {
    text-align:center;
  }
</style>

<body>

<div id="container" class='container'><div class="title"></div></div>

<div id="define">Theme by <a href="https://github.com/sakuxz">YONG-YUNG CHEN</a>. Program by <a href="https://github.com/ALiangLiang">ALiangLiang</a>.</div>

</body>
`