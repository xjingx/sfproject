<template>
	<div class="_aside">
		<el-menu :default-active="onRoutes" :collapse="navShow" class="el-menu-vertical-demo menu" unique-opened router>
			<template v-for="(menu_one,i) in menuData">
				<el-submenu v-if='true' :key="i" :index="menu_one.path">
					<template slot="title">
						<i :class="menu_one.icon"></i>
						<span>{{menu_one.title}}</span>
					</template>

					<el-menu-item v-for="(menu_two,i) in menu_one.subs" :key="i" :index="menu_two.path">
						<i :class="menu_two.icon"></i>
						<span>{{menu_two.title}}</span>
					</el-menu-item>
				</el-submenu>
			</template>
		</el-menu>
	</div>
</template>
<style lang="scss">
	._aside {
		.menu {
			height: 100%;
		}

		.menu:not(.el-menu--collapse) {
			//设置才可以有折叠特效
			width: 300px;
		}
	}
</style>

<script>
	import bus from "../common/bus";
	export default {
		data() {
			return {
				navShow: false, //导航是否折叠
				menuData: [{
						icon: "el-icon-star-on", //侧栏第一项图标
						path: "p_first", //这个可以设置展开，如果一样就会同时展开
						title: "信息发布与查询", //侧栏第一项名字
						subs: [{
							page: true,
							path: "first", //这里是每个页面对应的名字，对应router里面的内容
							title: "信息发布与查询",
							icon: "el-icon-star-on" //这里是下拉菜单的图标
						}]
					},
					{
						icon: "el-icon-tickets", //侧栏第二项图标
						path: "p_second",
						title: "信息与公告", //侧栏第二项名字
						subs: [{
							page: true,
							path: "second",
							title: "信息与公告",
							icon: "el-icon-tickets"
						}
						]
					},
					{
						icon: "el-icon-edit", //侧栏第三项图标
						path: "p_third",
						title: "个人信息", //侧栏第三项名字
						subs: [{
							page: true,
							path: "third",
							title: "个人信息",
							icon: "el-icon-edit"
						}]
					},
					{
						icon: "el-icon-star-off", //侧栏第四项图标
						path: "p_fourth",
						title: "报到进度", //侧栏第四项名字
						subs: [{
							page: true,
							path: "fourth",
							title: "报到进度",
							icon: "el-icon-star-off"
						}]
					}, 
					{
						icon: "el-icon-success", //侧栏第五项图标
						path: "p_fifth",
						title: "绿色通道", //侧栏第五项名字
						subs: [{
							page: true,
							path: "fifth",
							title: "绿色通道",
							icon: "el-icon-success"
						}]
					},
					{
						icon: "el-icon-d-arrow-right", //侧栏第六项图标
						path: "p_sixth",
						title: "财务缴费", //侧栏第六项名字
						subs: [{
							page: true,
							path: "sixth",
							title: "财务缴费",
							icon: "el-icon-d-arrow-right"
						}]
					}
				]
			};
		},
		created() {
			var permitPathList = this.getPermitPathList();
			this.setMenuPermit(this.menuData, permitPathList); //注意:必须写到created中,先初始化menuData值再渲染页面
			bus.$on("navShowChange", navShow => {
				this.navShow = navShow;
			});
		},
		mounted() {},
		methods: {
		},
		computed: {
			onRoutes() {
				//监听路由,设置默认激活项目
				return this.$route.path.replace("/", "");
			}
		}
	};
</script>
