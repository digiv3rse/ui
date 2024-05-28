# v2.0.0-beta.0

- See v2.0.0-dev.* sections below for list of non-breaking changes

## Breaking changes from v1

- Minimum React version increased to v16.8+ (because of `formik` dependency on React hooks)
- (Button): Add `primaryInverted` and `secondaryInverted` values for `colors` prop, removing the `inverted` prop.
- (Button): Replace `floating` prop with `elevation` that can be `high` or `low`
- (Button): Replace `special` and `special2` variants with a single `special` key
- (Input): No longer a styled component export but a wrapper. `styled(Input)` will no longer work. Use the raw input that is exported under `InputBase`.
- (Checkbox, Radio): Rework styles, forward props to inner `input`, normalize onChange event
- (icons): Rename `MoreInfoIcon` to `MoreVertIcon`; removed `NetStatsIcon` in favor of `EthStatsIcon`; Rename icons `Pagination*Icon` to `Arrow*Icon`
- (layout): removed Page, Container, Content and Sidebar (Sidebar, SidebarColumns, LogoContainer, SidebarPageTitle) components
- (ModalSelectBox, SelectBox): Removed
- (ResponsiveContainer): `forScreenWidth` prop replaced with `mediaQuery`, which takes presets from theme.media object
- (theme): inside toolbar the colors residing inside `icon` where moved to `item` since the colors applies also to labels and not only icons
- (IPalette): Rework color palette: Various `*_GREY_*` colors replaced by `DAWN`, `DUSK`, `DARK` and variants by lightness increments (_D5, _L5)
- (ITheme): Theme colors pruning:
    - Unflatten toolbar icons colors (from toolbarIcon* to toolbar.icon.*)
    - Remove `sidebarBorder`
    - Rename `mediaQueries` to `media`; remove `mediaQueries.breakPoints`
    - refactor accordion* and select* colors
    - removed checkbox*, radio*
    - consolidate button* with a nested structure
    - add input.*, menu.*
- (Fade): Rename `active` prop to `enabled`. Add `in` prop controlling direction and forward other props to CSSTransition
- (Tooltip): Rename to `TooltipBase`; removed `arrow` prop
- (TooltipRegular): Rename to `Tooltip`; move `arrow` prop from `Popover`

# v2.0.0-dev.17

- (Checkbox, Radio): Customizable theme colors
- (CheckboxField, RadioField): Forward `validate` attribute, for field arrays
- (form): Add CustomField component as a formik Field wrapper
- (CheckboxField, InputField, RadioField, TextareaField): Forward `id` attribute
- (CheckboxField): Forward `value` attribute (for checkbox arrays)
- (SelectField): Fix validation not triggering when selecting an option

# v2.0.0-dev.16

- Add new icons: IdentityIcon, MailIcon, SlackIcon, TriangleDownIcon, TriangleUpIcon, TriangleLeftIcon, TriangleRightIcon

# v2.0.0-dev.15

- Add AccordionBasic component

# v2.0.0-dev.14

- (InputField, Input, TextareaField, Textarea): Fix innerRef
- (form): Export `useFormContext` hook

# v2.0.0-dev.13

- (UsdValue): Add new component `UsdValue`
- (UsdValueBox): Modified to use `UsdValue`
- (Select): Set minimum layer width to expander width
- (Accordion, Select, Expander*): Style fixes
- (SelectField): Make `id` prop optional
- (Input): Add support for left icon (`LeftIcon` prop) and text alignment (`alignRight` prop)

## Breaking changes
- (ITheme): Refactor accordion* and select* colors
- (Input): No longer a styled component export but a wrapper. `styled(Input)` will no longer work. Use the raw input that is exported under `InputBase`.

# v2.0.0-dev.12

- Add new icons: PlayIcon, PauseIcon, BellOutlineIcon, CalendarIcon, PlusLargeIcon, ArrowUpRightIcon, ArrowDownLeftIcon, AlethioReportsInvertedIcon, TrashOutlineIcon, EditIcon, CogIcon, InfoTriangleIcon, ArrowUpRightInvertedIcon, MoreHorizIcon
- (OpenInBrowserIcon, ResetIcon): Fix hardcoded black color
- (Dropdown, Fade): Fix bad initial dropdown positioning caused by Fade component delay

## Breaking changes

- (MoreInfoIcon): Rename to `MoreVertIcon`
- (Button): Add `primaryInverted` and `secondaryInverted` values for `colors` prop, removing the `inverted` prop.

# v2.0.0-dev.11

- (Box, ValueBox): Fix content overflow with ellipsis even when not using `fullWidth` prop
- (Box, ValueBox): Add `borderStyle` prop, change default background to white instead of transparent
- (HexData): Always show copy to clipboard button

# v2.0.0-dev.10

- Add new icons (ChatBubbleIcon, DefiIcon, InfoCapIcon, LayoutIcon, ListIcon, TableIcon, WalletIcon)
- (Tooltip, TooltipBase): Fix `style` prop overriding default styles

# v2.0.0-dev.9

- Update Typescript to 3.7, fix bignumber error
- Migrate mobile menu components from @alethio/cms package
- (ExternalLink): Add missing rel="noopener noreferrer"
- (GasUsedValueBox): Fix case when gas limit is 0

# v2.0.0-dev.8

## Breaking changes

- (layout): removed Page, Container, Content and Sidebar (Sidebar, SidebarColumns, LogoContainer, SidebarPageTitle) components
- (theme): inside toolbar the colors residing inside `icon` where moved to `item` since the colors applies also to labels and not only icons

# v2.0.0-dev.7

- Lock package dependencies (formik and color) because of errors in the latest versions

# v2.0.0-dev.6

- (Label): uppercase text can be disabled setting `uppercase` prop to false.
- (Select): Fixes programatically change and menu layer zIndex

# v2.0.0-dev.5

- (Select): added select and selectfield components that uses expanderBase and expanderSelect

## Breaking changes

- (Tooltip): removed arrow prop
- (Tooltip): renamed to TooltipBase
- (TooltipRegular): renamed to Tooltip

# v2.0.0-dev.4

- (layout/responsive/*): Add React hooks `useViewportSize` and `useMediaCheck` (with HOC alternative `WithMediaCheck`)
- (ITheme): Predefined media queries are marked as non-customizable in the theme and also provided as a static export.

# v2.0.0-dev.3

- (PlusIcon): Fix SVG attribute casing
- (InputField): Fix props not being passed to inner input element

# v2.0.0-dev.2

- (ITheme): Update breakpoints for media queries; export numeric values from `layout/responsive/breakpoints.ts`

# v2.0.0-dev.1

- Add missing icons for symmetry; update hamburger icon SVG
- (Button) - Add inverted variant
- (Input): Fix placeholder opacity
- (InputField): Add icon for error state
- (HorizontalBar, VerticalBar): Remove border
- (ITheme): Add usual media queries for usual device sizes under `theme.media`
- (IPalette): Update color codes for GREEN, DARK, DUSK, DAWN

## Breaking changes
- Rename icons `Pagination*Icon` to `Arrow*Icon`
- (Button): Replace `floating` prop with `elevation` that can be `high` or `low`
- (Button): Replace `special` and `special2` variants with a single `special` key
- (IPalette): Replace `DAWN_L2` with `DAWN_L5`
- (ITheme): Unflatten toolbar icons colors (from toolbarIcon* to toolbar.icon.*)
- (ITheme): Remove `sidebarBorder`
- (ITheme): Rename `mediaQueries` to `media`; remove `mediaQueries.breakPoints`
- (ModalSelectBox, SelectBox): Removed
- (ResponsiveContainer): `forScreenWidth` prop replaced with `mediaQuery`, which takes presets from theme.media object

# v2.0.0-dev.0

- Add partial support for server-side rendering (fixed SvgIcon unique id generation)
- Use `color` npm package to programatically manipulate theme colors. This package can also be used directly in the consumer app
- Use `react-uid` npm package to generate unique element ids for SSR. Refer to README.md for additional info.
- Update TypeScript to 3.6.4
- (Button): Rework styles and color variants, add `rounded` option, use proper `button` HTML tag and forward attributes
- Add form Input and Textarea components
- Add Dropdown component
- Add Menu and MenuItem components
- Add form state management using `formik` in `form/` folder. New components: Form, FormItem, FormStatus, form/Label, SubmitButton, FieldError, WithFormState, InputField, CheckboxField, RadioField, TextareaField
- (Box): Use ellipsis when text overflows in `fullWidth` mode
- (ITheme): Add `font` weight constants

## Breaking changes
- Minimum React version increased to v16.8+ (because of `formik` dependency on React hooks)
- (Checkbox, Radio): Rework styles, forward props to inner `input`, normalize onChange event
- (Fade): Rename `active` prop to `enabled`. Add `in` prop controlling direction and forward other props to CSSTransition
- (NetStatsIcon): removed, use EthStatsIcon instead
- (Popover, Tooltip): Moved arrow from Popover to Tooltip component
- (IPalette): Rework color palette: Various `*_GREY_*` colors replaced by `DAWN`, `DUSK`, `DARK` and variants by lightness increments (_D5, _L5)
- (ITheme): Theme colors pruning:
    - removed checkbox*, radio*
    - consolidate button* with a nested structure
    - add input.*, menu.*

# v1.1.0

- Add MobileMenuLayer and MobileMenuItem components, replacing MenuLayer and MenuItem from @alethio/cms package

# v1.0.1

- Added CursorInfinitePagination. When total items count is unknown, the pagination checks if there is a next page to show the next page button or not.

# v1.0.0

- Stable release

# v1.0.0-beta.24

- Updated wrapper and reexport for styled-components

# v1.0.0-beta.23

## Breaking Changes

- HorizontalBar is not responsive anymore. Since the responsiveness was only used by TopBar this one has now his own HorizontalBar that is responsive

## Other changes

- Added icons for DexWatch, Discord, Hamburger, social media
- Added optional prop to Fade: active (defaults to true) to control the initial state
- Added optional prop to ExternalLink: target (defaults to "_blank") same behavior as anchor target prop
- Added alethioLogo color in ITheme

# v1.0.0-beta.22

- (ToolbarIconButton): Add toggle functionality

# v1.0.0-beta.21

- (AccordionHorizontal, AccordionVertical) Fix arrow position when container offset is 0.

# v1.0.0-beta.20

- (Expander) Fix regression introduced with beta.19, when `value` is possibly undefined.

# v1.0.0-beta.19

- (EthValue, EthValueBox): Make ETH symbol configurable
- Fix some typings for components with defaultProps. This could be a breaking change, if the components were consumed incorrectly before, by omitting some required props (this was possible, depending on the TS version used, and is now fixed).

# v1.0.0-beta.18

- Updated the Alethio palette colors

# v1.0.0-beta.17

- (DiGiReportsIcon) Fix regression introduced with beta.15 in `size` prop

# v1.0.0-beta.16

- (Grid): Flexible row height

# v1.0.0-beta.15

## Breaking Changes

- DiGiReportsIcon was changed to another version in which the svg doesn't use mask, so the size and color are optional parameters now like in the other standard icons

# v1.0.0-beta.5

## Breaking Changes

- (AccordionHorizontal, AccordionVertical): accordion items are no longer passed via `items` prop. New `AccordionItem` child component will be used instead.

- (ITheme): Label color property has been renamed (`label` => `label.default`). `arrowLabel*` properties have been removed
