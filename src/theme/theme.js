import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    sm: "480px",
    smd: "640px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
    xxl: "1536px",
  },
  colors: {
    amber: {
      400: "#FBBF24",
      500: "#F59E0B",
    },
    blue: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      600: "#2563EB",
      700: "#1D4ED8",
      800: "#1E40AF",
      900: "#1E3ABA",
      925: "#0F1D45",
      950: "#070E22",
    },
    green: {
      100: "#DCFCE7",
      200: "#BBF7D0",
      500: "#22C55E",
      700: "#15803D",
      800: "#166534",
    },
    indigo: {
      200: "#C7D2FE",
      800: "#3730A3",
    },
    orange: {
      50: "#FFF7ED",
      200: "#FED7AA",
      300: "#FDBA74",
      800: "#9A3412",
    },
    violet: {
      50: "#F5F3FF",
      200: "#DDD6FE",
    },
    slate: {
      25: "#FBFCFD",
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      900: "#0F172A",
    },
    yellow: {
      400: "#FACC15",
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "white",
        color: "slate.700",
        fontSize: "14px",
        lineHeight: "20px",
      },
      svg: {
        display: "inline",
      },
    }),
  },
  components: {
    Accordion: {
      baseStyle: {
        root: {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: "8px",
        },
        container: {
          border: "none",
        },
        button: {
          borderWidth: "1px",
          borderColor: "slate.200",
          borderRadius: "12px",
          overflow: "hidden",
          _hover: {
            background: "slate.100",
          },
        },
      },
    },
    Button: {
      sizes: {
        sm: {
          h: "32px",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "20px",
        },
        md: {
          h: "40px",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "20px",
        },
        lg: {
          h: "48px",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
      variants: {
        primary: {
          bg: "radial-gradient(62.26% 123.96% at 69.08% 44.79%, #1D4ED8 0%, #1741B7 100%)",
          boxShadow:
            "0px 4px 8px rgba(2, 14, 47, 0.1), inset 0px 1px 0px #1741B7, inset 0px 2px 0px rgba(255, 255, 255, 0.13), inset -1px -1px 0px rgba(5, 17, 57, 0.1)",
          borderRadius: "8px",
          color: "white",
          _hover: {
            bg: "radial-gradient(112.48% 223.96% at 69.08% 44.79%, #1D4ED8 0%, #1E4ED5 100%)",
            boxShadow:
              "0px 4px 8px rgba(2, 14, 47, 0.1), inset 0px 1px 0px #335ED8, inset 0px 2px 0px rgba(255, 255, 255, 0.13), inset -1px -1px 0px rgba(5, 17, 57, 0.1)",
          },
        },
        light: {
          bg: "radial-gradient(90.36% 90.18% at 67.69% 27.68%, #FFFFFF 0%, #FBFBFB 100%)",
          borderWidth: "1px",
          borderColor: "slate.200",
          boxShadow:
            "inset 0px 1px 0px #F7F8F9, inset 0px 2px 0px #FFFFFF, inset 0px -1px 0px rgba(4, 21, 71, 0.05)",
          borderRadius: "8px",
          color: "blue.925",
          _hover: {
            color: "blue.600",
          },
          _active: {
            bg: "transparent",
            borderColor: "blue.600",
            color: "blue.600",
          },
        },
      },
    },
    Checkbox: {
      variants: {
        sm: {
          label: {
            fontSize: "14px",
            lineHeight: "20px",
          },
        },
      },
    },
    Heading: {
      variants: {
        xxxs: {
          fontWeight: "normal",
          fontSize: "10px",
          lineHeight: "12px",
        },
        xxs: {
          fontWeight: "normal",
          fontSize: "12px",
          lineHeight: "16px",
        },
        xs: {
          fontWeight: "normal",
          fontSize: "13px",
          lineHeight: "18px",
        },
        sm: {
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "20px",
        },
        md: {
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "24px",
        },
        lg: {
          fontWeight: "medium",
          fontSize: "18px",
          lineHeight: "28px",
        },
        xl: {
          fontWeight: "medium",
          fontSize: "20px",
          lineHeight: "28px",
        },
        xxl: {
          fontWeight: "medium",
          fontSize: "24px",
          lineHeight: "32px",
        },
        xxxl: {
          fontWeight: "semibold",
          fontSize: "30px",
          lineHeight: "36px",
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          color: "slate.900",
          _placeholder: {
            color: "slate.500",
          },
        },
      },
      variants: {
        category: {
          field: {
            h: "full",
            fontSize: "14px",
            lineHeight: "20px",
            color: "slate.900",
            bg: "white",
            borderWidth: "1px",
            borderColor: "slate.200",
            borderRadius: "8px",
            _placeholder: {
              color: "slate.500",
            },
            _focusVisible: {
              boxShadow: "0px 0px 0px 4px rgba(149, 170, 238, 0.25)",
            },
          },
          addon: {
            bg: "slate.100",
            borderWidth: "1px",
            borderColor: "slate.200",
          },
          element: {
            w: "fit-content",
            color: "slate.400",
          },
        },
        rounded: {
          field: {
            fontSize: "14px",
            lineHeight: "20px",
            color: "slate.900",
            bg: "white",
            borderWidth: "1px",
            borderColor: "slate.200",
            borderRadius: "full",
            boxShadow: "0px 4px 8px rgba(15, 23, 42, 0.1)",
            _placeholder: {
              color: "slate.500",
            },
            _focusVisible: {
              borderColor: "blue.600",
              boxShadow: "none",
            },
          },
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "normal",
        },
      },
    },
    Menu: {
      sizes: {
        sm: {
          button: {
            w: "full",
            h: "40px",
            fontSize: "14px",
            lineHeight: "20px",
          },
        },
      },
      variants: {
        category: {
          button: {
            color: "blue.925",
            borderWidth: "1px",
            borderColor: "slate.200",
            bg: "slate.100",
            borderLeftRadius: "8px",
            pl: { base: "4px", md: "16px" },
            py: { base: "12px", md: "10px" },
            overflow: "hidden",
          },
          list: {
            bg: "white",
            borderRadius: "8px",
            p: "4px",
          },
          item: {
            color: "slate.700",
            fontSize: "14px",
            lineHeight: "20px",
            pl: "20px",
            pr: "16px",
            py: "8px",
            _hover: {
              bg: "slate.50",
            },
            _focus: {
              color: "slate.900",
            },
          },
        },
        dropdown: {
          button: {
            position: "relative",
            color: "blue.950",
            borderWidth: "1px",
            borderColor: "slate.200",
            borderRadius: "8px",
            padding: "12px",
            _active: {
              boxShadow: "0px 4px 8px rgba(15, 23, 42, 0.1)",
            },
          },
          list: {
            bg: "white",
            borderRadius: "8px",
            py: "8px",
          },
          item: {
            color: "slate.700",
            fontSize: "14px",
            lineHeight: "20px",
            pl: "20px",
            pr: "16px",
            py: "8px",
            _hover: {
              bg: "slate.50",
            },
            _focus: {
              color: "slate.900",
            },
          },
        },
        ghost: {
          button: {
            position: "relative",
            color: "blue.950",
          },
          list: {
            bg: "white",
            borderRadius: "8px",
            py: "8px",
          },
          item: {
            color: "slate.700",
            fontSize: "14px",
            lineHeight: "20px",
            pl: "20px",
            pr: "16px",
            py: "8px",
            _hover: {
              bg: "slate.50",
            },
            _focus: {
              color: "slate.900",
            },
          },
        },
      },
    },
    Text: {
      variants: {
        xxxs: {
          fontSize: "10px",
          lineHeight: "12px",
        },
        xxs: {
          fontSize: "12px",
          lineHeight: "16px",
        },
        xs: {
          fontSize: "13px",
          lineHeight: "18px",
        },
        sm: {
          fontSize: "14px",
          lineHeight: "20px",
        },
        md: {
          fontSize: "16px",
          lineHeight: "24px",
        },
        lg: {
          fontSize: "18px",
          lineHeight: "28px",
        },
        xl: {
          fontSize: "20px",
          lineHeight: "28px",
        },
        xxl: {
          fontSize: "24px",
          lineHeight: "32px",
        },
        xxxl: {
          fontWeight: "medium",
          fontSize: "30px",
          lineHeight: "36px",
        },
      },
    },
    Tooltip: {
      baseStyle: {
        bg: "white",
        color: "slate.700",
        fontSize: "14px",
        lineHeight: "20px",
        borderRadius: "8px",
        padding: "8px 16px",
        arrow: {
          bg: "white",
        },
      },
    },
  },
});
