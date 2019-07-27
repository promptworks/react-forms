# Switch

*See: packages/formik-native-inputs/src/index.ts*

## Props

| Name | Type | Description |
|------|------|-------------|
| <strong>name</strong> <sup><em>required</em></sup> | `string` |  |
| <strong>accessibilityActions</strong> | `string[]` | Provides an array of custom actions available for accessibility.<br>@platform ios |
| <strong>accessibilityComponentType</strong> | `"none" \| "button" \| "radiobutton_checked" \| "radiobutton_unchecked"` | In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a “button”).<br>If we were using native buttons, this would work automatically. Since we are using javascript, we need to<br>provide a bit more context for TalkBack. To do so, you must specify the ‘accessibilityComponentType’ property<br>for any UI component. For instances, we support ‘button’, ‘radiobutton_checked’ and ‘radiobutton_unchecked’ and so on.<br>@platform android |
| <strong>accessibilityElementsHidden</strong> | `boolean` | A Boolean value indicating whether the accessibility elements contained within this accessibility element<br>are hidden to the screen reader.<br>@platform ios |
| <strong>accessibilityHint</strong> | `string` | An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label. |
| <strong>accessibilityIgnoresInvertColors</strong> | `boolean` | https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios<br>@platform ios |
| <strong>accessibilityLabel</strong> | `string` | Overrides the text that's read by the screen reader when the user interacts with the element. By default, the<br>label is constructed by traversing all the children and accumulating all the Text nodes separated by space. |
| <strong>accessibilityLiveRegion</strong> | `"none" \| "polite" \| "assertive"` | Indicates to accessibility services whether the user should be notified when this view changes.<br>Works for Android API >= 19 only.<br>See http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.<br>@platform android |
| <strong>accessibilityRole</strong> | `AccessibilityRole` | Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on. |
| <strong>accessibilityStates</strong> | `AccessibilityState[]` | Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on. |
| <strong>accessibilityTraits</strong> | `"none" \| "search" \| "button" \| "link" \| "image" \| "text" \| "adjustable" \| "header" \| "summary" \| "selected" \| "disabled" \| "plays" \| "key" \| "frequentUpdates" \| "startsMedia" \| "allowsDirectInteraction" \| "pageTurn" \| AccessibilityTrait[]` | Accessibility traits tell a person using VoiceOver what kind of element they have selected.<br>Is this element a label? A button? A header? These questions are answered by accessibilityTraits.<br>@platform ios |
| <strong>accessibilityViewIsModal</strong> | `boolean` | A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.<br>@platform ios |
| <strong>accessible</strong> | `boolean` | When true, indicates that the view is an accessibility element.<br>By default, all the touchable elements are accessible. |
| <strong>collapsable</strong> | `boolean` | Views that are only used to layout their children or otherwise don't draw anything<br>may be automatically removed from the native hierarchy as an optimization.<br>Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy. |
| <strong>disabled</strong> | `boolean` | If true the user won't be able to toggle the switch.<br>Default value is false. |
| <strong>hasTVPreferredFocus</strong> | `boolean` | *(Apple TV only)* May be set to true to force the Apple TV focus engine to move focus to this view.<br>@platform ios |
| <strong>hitSlop</strong> | `Insets` | This defines how far a touch event can start away from the view.<br>Typical interface guidelines recommend touch targets that are at least<br>30 - 40 points/density-independent pixels. If a Touchable view has<br>a height of 20 the touchable height can be extended to 40 with<br>hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}<br>NOTE The touch area never extends past the parent view bounds and<br>the Z-index of sibling views always takes precedence if a touch<br>hits two overlapping views. |
| <strong>importantForAccessibility</strong> | `"auto" \| "yes" \| "no" \| "no-hide-descendants"` | Controls how view is important for accessibility which is if it fires accessibility events<br>and if it is reported to accessibility services that query the screen.<br>Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.<br><br>Possible values:<br>      'auto' - The system determines whether the view is important for accessibility - default (recommended).<br>      'yes' - The view is important for accessibility.<br>      'no' - The view is not important for accessibility.<br>      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views. |
| <strong>innerRef</strong> | `(instance: typeof Switch) => void` |  |
| <strong>ios_backgroundColor</strong> | `string` | On iOS, custom color for the background.<br>Can be seen when the switch value is false or when the switch is disabled. |
| <strong>isTVSelectable</strong> | `boolean` | *(Apple TV only)* When set to true, this view will be focusable<br>and navigable using the Apple TV remote.<br>@platform ios |
| <strong>nativeID</strong> | `string` | Used to reference react managed views from native code. |
| <strong>needsOffscreenAlphaCompositing</strong> | `boolean` | Whether this view needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.<br>The default (false) falls back to drawing the component and its children<br>with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value.<br>This default may be noticeable and undesired in the case where the View you are setting an opacity on<br>has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).<br><br>Rendering offscreen to preserve correct alpha behavior is extremely expensive<br>and hard to debug for non-native developers, which is why it is not turned on by default.<br>If you do need to enable this property for an animation,<br>consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame).<br>If that property is enabled, this View will be rendered off-screen once,<br>saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU. |
| <strong>onAccessibilityAction</strong> | `() => void` | When `accessible` is true, the system will try to invoke this function<br>when the user performs an accessibility custom action.<br>@platform ios |
| <strong>onAccessibilityTap</strong> | `() => void` | When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.<br>@platform ios |
| <strong>onLayout</strong> | `(event: LayoutChangeEvent) => void` | Invoked on mount and layout changes with<br><br>{nativeEvent: { layout: {x, y, width, height}}}. |
| <strong>onMagicTap</strong> | `() => void` | When accessible is true, the system will invoke this function when the user performs the magic tap gesture.<br>@platform ios |
| <strong>onMoveShouldSetResponder</strong> | `(event: GestureResponderEvent) => boolean` | Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness? |
| <strong>onMoveShouldSetResponderCapture</strong> | `(event: GestureResponderEvent) => boolean` | onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,<br>where the deepest node is called first.<br>That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.<br>This is desirable in most cases, because it makes sure all controls and buttons are usable.<br><br>However, sometimes a parent will want to make sure that it becomes responder.<br>This can be handled by using the capture phase.<br>Before the responder system bubbles up from the deepest component,<br>it will do a capture phase, firing on*ShouldSetResponderCapture.<br>So if a parent View wants to prevent the child from becoming responder on a touch start,<br>it should have a onStartShouldSetResponderCapture handler which returns true. |
| <strong>onResponderEnd</strong> | `(event: GestureResponderEvent) => void` | If the View returns true and attempts to become the responder, one of the following will happen: |
| <strong>onResponderGrant</strong> | `(event: GestureResponderEvent) => void` | The View is now responding for touch events.<br>This is the time to highlight and show the user what is happening |
| <strong>onResponderMove</strong> | `(event: GestureResponderEvent) => void` | If the view is responding, the following handlers can be called:<br>The user is moving their finger |
| <strong>onResponderReject</strong> | `(event: GestureResponderEvent) => void` | Something else is the responder right now and will not release it |
| <strong>onResponderRelease</strong> | `(event: GestureResponderEvent) => void` | Fired at the end of the touch, ie "touchUp" |
| <strong>onResponderStart</strong> | `(event: GestureResponderEvent) => void` |  |
| <strong>onResponderTerminate</strong> | `(event: GestureResponderEvent) => void` | The responder has been taken from the View.<br>Might be taken by other views after a call to onResponderTerminationRequest,<br>or might be taken by the OS without asking (happens with control center/ notification center on iOS) |
| <strong>onResponderTerminationRequest</strong> | `(event: GestureResponderEvent) => boolean` | Something else wants to become responder.<br>Should this view release the responder? Returning true allows release |
| <strong>onStartShouldSetResponder</strong> | `(event: GestureResponderEvent) => boolean` | A view can become the touch responder by implementing the correct negotiation methods.<br>There are two methods to ask the view if it wants to become responder:<br>Does this view want to become responder on the start of a touch? |
| <strong>onStartShouldSetResponderCapture</strong> | `(event: GestureResponderEvent) => boolean` | onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,<br>where the deepest node is called first.<br>That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.<br>This is desirable in most cases, because it makes sure all controls and buttons are usable.<br><br>However, sometimes a parent will want to make sure that it becomes responder.<br>This can be handled by using the capture phase.<br>Before the responder system bubbles up from the deepest component,<br>it will do a capture phase, firing on*ShouldSetResponderCapture.<br>So if a parent View wants to prevent the child from becoming responder on a touch start,<br>it should have a onStartShouldSetResponderCapture handler which returns true. |
| <strong>onTintColor</strong> | `string` | Background color when the switch is turned on.<br>@deprecated |
| <strong>onTouchCancel</strong> | `(event: GestureResponderEvent) => void` |  |
| <strong>onTouchEnd</strong> | `(event: GestureResponderEvent) => void` |  |
| <strong>onTouchEndCapture</strong> | `(event: GestureResponderEvent) => void` |  |
| <strong>onTouchMove</strong> | `(event: GestureResponderEvent) => void` |  |
| <strong>onTouchStart</strong> | `(event: GestureResponderEvent) => void` |  |
| <strong>pointerEvents</strong> | `"none" \| "box-none" \| "box-only" \| "auto"` | In the absence of auto property, none is much like CSS's none value. box-none is as if you had applied the CSS class:<br><br>.box-none {<br>   pointer-events: none;<br>}<br>.box-none * {<br>   pointer-events: all;<br>}<br><br>box-only is the equivalent of<br><br>.box-only {<br>   pointer-events: all;<br>}<br>.box-only * {<br>   pointer-events: none;<br>}<br><br>But since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes,<br>we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform. |
| <strong>removeClippedSubviews</strong> | `boolean` | This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews,<br>most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound.<br>The subviews must also have overflow: hidden, as should the containing view (or one of its superviews). |
| <strong>renderToHardwareTextureAndroid</strong> | `boolean` | Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.<br><br>On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:<br>in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be<br>re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation. |
| <strong>shouldRasterizeIOS</strong> | `boolean` | Whether this view should be rendered as a bitmap before compositing.<br><br>On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children;<br>for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view<br>and quickly composite it during each frame.<br><br>Rasterization incurs an off-screen drawing pass and the bitmap consumes memory.<br>Test and measure when using this property. |
| <strong>style</strong> | `StyleProp<ViewStyle>` |  |
| <strong>testID</strong> | `string` | Used to locate this view in end-to-end tests. |
| <strong>thumbColor</strong> | `string` | Color of the foreground switch grip. |
| <strong>thumbTintColor</strong> | `string` | Color of the foreground switch grip.<br>@deprecated |
| <strong>tintColor</strong> | `string` | Background color when the switch is turned off.<br>@deprecated |
| <strong>trackColor</strong> | `{ false: string; true: string; }` | Custom colors for the switch track<br><br>Color when false and color when true |
| <strong>tvParallaxMagnification</strong> | `number` | *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 1.0.<br>@platform ios |
| <strong>tvParallaxProperties</strong> | `TVParallaxProperties` | *(Apple TV only)* Object with properties to control Apple TV parallax effects.<br>@platform ios |
| <strong>tvParallaxShiftDistanceX</strong> | `number` | *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.<br>@platform ios |
| <strong>tvParallaxShiftDistanceY</strong> | `number` | *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.<br>@platform ios |
| <strong>tvParallaxTiltAngle</strong> | `number` | *(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 0.05.<br>@platform ios |
| <strong>validate</strong> | `FieldValidator` |  |