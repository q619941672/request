<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
@font-face {font-family: "iconfont";
  src: url('~@/static/css/iconfont.eot?t=1606110008919'); /* IE9 */
  src: url('~@/static/css/iconfont.eot?t=1606110008919#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('~@/static/css/iconfont.woff?t=1606110008919') format('woff'),
  url('~@/static/css/iconfont.ttf?t=1606110008919') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('~@/static/css/iconfont.svg?t=1606110008919#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shuihu:before {
  content: "\e636";
}

.icon-icon-test:before {
  content: "\e63b";
}

.icon-huiyuanqia:before {
  content: "\e6b0";
}

.icon-shouye1:before {
  content: "\e627";
}

.icon-iconfontdesign1020-08:before {
  content: "\e604";
}

.icon-biaoqianA01_zhuanqu-58:before {
  content: "\eab0";
}

.icon-iconsy1:before {
  content: "\e639";
}

.icon-wode:before {
  content: "\e605";
}

.icon-gouwuche:before {
  content: "\e6df";
}

.icon-fenlei_:before {
  content: "\e607";
}

.icon-shouye:before {
  content: "\e6c7";
}


</style>
