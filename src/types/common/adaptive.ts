enum EBreakpoints {
    "LARGE" = 1280,
	"LAPTOP" = 1024,
	"TABLET" = 768,
	"TABLET_MINI" = 625,
	"MOBILE" = 425,
	"SMALL_MOBILE" = 375,
    "MIN" = 0,
}

type TAdaptive = {
    [key in EBreakpoints]?: number | string | React.ReactNode;
};

export { EBreakpoints, type TAdaptive };
