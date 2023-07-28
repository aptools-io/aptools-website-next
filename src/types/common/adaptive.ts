enum EBreakpoints {
	"WIDE" = 1920,
	"FULL" = 1440,
    "LARGE" = 1280,
	"LAPTOP" = 1024,
	"TABLET" = 768,
	"TABLET_MINI" = 625,
	"MOBILE" = 425,
	"SMALL_MOBILE" = 375,
    "MIN" = 1,
}

type TAdaptive = {
    [key in EBreakpoints]?: any;
};

export { EBreakpoints, type TAdaptive };
