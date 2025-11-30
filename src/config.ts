import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";

export const siteConfig: SiteConfig = {
	title: "啸 Online",
	subtitle: "自己的地球,Online的世界",
	lang: "en", // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 275, // 主题颜色的 hue 值（范围 0–360，例如：红色为 0，青色为 200，粉色为 345）
		fixed: true, // 是否对访客隐藏主题颜色选择器
	},
	banner: {
		enable: true,
		src: "https://m.ccw.site/user_projects_assets/06dfce9f00ed84136436609945efce5d.jpg", // 相对于 /src 目录的位置；如果路径以 '/' 开头，则相对于 /public 目录
		position: "center", // 图标位置，仅支持 'top', 'center', 'bottom'，默认值为 'center'

		credit: {
			enable: false, // 是否显示 banner 图片的版权信息
			text: "", // 要显示的版权文字
			url: "", // （可选）原始图片或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 是否在文章右侧显示目录
		depth: 3, // 目录中显示的最大标题层级（范围 1–3）
	},
	favicon: [
		// 如果想使用默认的 favicon，可以保留此数组为空
		{
			src: "https://m.ccw.site/user_projects_assets/3302d14052d37840b0d7a5cf0a6ac84c.png",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "主页",
			url: "/", // 内部链接不需要包含基础路径，因为基础路径会自动添加
			external: false, // 是否显示外部链接图标，并在新标签页中打开链接
		},
		{
			name: "归档",
			url: "/archive/", // 内部链接不需要包含基础路径，因为基础路径会自动添加
			external: false, // 是否显示外部链接图标，并在新标签页中打开链接
		},
		{
			name: "关于",
			url: "/about/", // 内部链接不需要包含基础路径，因为基础路径会自动添加
			external: false, // 是否显示外部链接图标，并在新标签页中打开链接
		},
		{
			name: "友链",
			url: "/posts/friend-link/", // 内部链接不需要包含基础路径，因为基础路径会自动添加
			external: false, // 是否显示外部链接图标，并在新标签页中打开链接
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar:
		"https://m.ccw.site/user_projects_assets/3302d14052d37840b0d7a5cf0a6ac84c.png", // 相对于 /src 目录的位置；如果路径以 '/' 开头，则相对于 /public 目录
	name: "skydog221",
	bio: "自己的地球，Online的世界",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/skydog221",
		},
		{
			name: "订阅",
			icon: "fa6-solid:rss",
			url: "/rss.xml",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark", // 请选择“dark”主题，因为当前博客主题仅支持深色背景
};
