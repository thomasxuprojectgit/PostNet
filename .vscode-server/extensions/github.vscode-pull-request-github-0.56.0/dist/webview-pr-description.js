var oc=Object.defineProperty;var o=(Qo,ki)=>oc(Qo,"name",{value:ki,configurable:!0});(()=>{var Qo={149:(Q,M,G)=>{"use strict";G.d(M,{Z:()=>v});var te=G(645),J=G.n(te),$=J()(function(p){return p[1]});$.push([Q.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

body a {
	text-decoration: none;
}

body a:hover {
	text-decoration: underline;
}

button,
input[type='submit'] {
	background-color: var(--vscode-button-background);
	color: var(--vscode-button-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
	border: 1px solid transparent;
	outline: none;
	padding: 4px 12px;
	font-size: 13px;
	line-height: 18px;
	white-space: nowrap;
	user-select: none;
}

input.select-left {
	border-radius: 2px 0 0 2px;
}

button.select-right {
	border-radius: 0 2px 2px 0;
}

button:focus,
input[type='submit']:focus {
	outline: 1px solid var(--vscode-focusBorder);
	outline-offset: 2px;
}

button:focus-within,
input[type='submit']:focus-within {
	border: 1px solid transparent;
	outline: 1px solid transparent;
}

button:hover:enabled,
button:focus:enabled,
input[type='submit']:focus:enabled,
input[type='submit']:hover:enabled {
	background-color: var(--vscode-button-hoverBackground);
	cursor: pointer;
}

body button.secondary {
	background-color: var(--vscode-button-secondaryBackground);
	color: var(--vscode-button-secondaryForeground);
}

body button.secondary:hover {
	background-color: var(--vscode-button-secondaryHoverBackground);
}

textarea,
input[type='text'] {
	display: block;
	box-sizing: border-box;
	padding: 8px;
	width: 100%;
	resize: vertical;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-input-background);
	color: var(--vscode-input-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
}

textarea::placeholder,
input[type='text']::placeholder {
	color: var(--vscode-input-placeholderForeground);
}

select {
	display: block;
	box-sizing: border-box;
	padding: 4px 8px;
	border-radius: 2px;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-dropdown-background);
	color: var(--vscode-dropdown-foreground);
}

textarea:focus,
input[type='text']:focus,
input[type='checkbox']:focus,
select:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

input[type='checkbox'] {
	outline-offset: 1px;
}

.vscode-high-contrast input[type='checkbox'] {
	outline: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast input[type='checkbox']:focus {
	outline: 1px solid var(--vscode-contrastActiveBorder);
}

svg path {
	fill: var(--vscode-foreground);
}

body button:disabled,
input[type='submit']:disabled {
	opacity: 0.4;
}

body .hidden {
	display: none !important;
}

body img.avatar,
body span.avatar-icon svg {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

body img.avatar {
	vertical-align: middle;
}

.avatar-link {
	flex-shrink: 0;
}

.section-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.section-item .avatar-link {
	margin-right: 8px;
}

.section-item .avatar-container {
	flex-shrink: 0;
}

.section-item .login {
	width: 129px;
	flex-shrink: 0;
}

.section-item img.avatar {
	width: 20px;
	height: 20px;
}

.section-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px;
}

.reviewer-icons {
	display: flex;
	gap: 4px;
}

.push-right {
	margin-left: auto;
}

.avatar-with-author {
	display: flex;
	align-items: center;
}

.author-link {
	font-weight: 600;
	color: var(--vscode-editor-foreground);
}

.automerge-section {
	display: flex;
}

#status-checks .automerge-section {
	align-items: center;
	padding: 16px;
	background: var(--vscode-editorHoverWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.automerge-section .merge-select-container {
	margin-left: 8px;
}

.automerge-checkbox-wrapper,
.automerge-checkbox-label {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

/** Theming */

.vscode-high-contrast button {
	outline: none;
	background: var(--vscode-button-background);
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast input {
	outline: none;
	background: var(--vscode-input-background);
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast button:focus {
	border: 1px solid var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast button:hover {
	border: 1px dotted var(--vscode-contrastActiveBorder);
}

::-webkit-scrollbar-corner {
	display: none;
}
`,""]);const v=$},238:(Q,M,G)=>{"use strict";G.d(M,{Z:()=>v});var te=G(645),J=G.n(te),$=J()(function(p){return p[1]});$.push([Q.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

#app {
	display: grid;
	grid-template-columns: 1fr minmax(200px, 300px);
	column-gap: 32px;
}

#title {
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row: 1;
}

#main {
	grid-column: 1;
	grid-row: 2;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

#sidebar {
	display: flex;
	flex-direction: column;
	gap: 16px;
	grid-column: 2;
	grid-row: 2;
}

a:focus,
input:focus,
select:focus,
textarea:focus,
.title-text:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

.title-text {
	margin-right: 5px;
}

.title {
	display: flex;
	align-items: flex-start;
	margin: 20px 0;
	padding-bottom: 24px;
	border-bottom: 1px solid var(--vscode-list-inactiveSelectionBackground);
}

.title .pr-number {
	margin-left: 5px;
}

.loading-indicator {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.comment-body li div {
	display: inline;
}

.comment-body code,
.comment-body a,
span.lineContent {
	overflow-wrap: anywhere;
}

#title:empty {
	border: none;
}

h2 {
	margin: 0;
}

body hr {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid #555;
	margin: 0 !important;
	padding: 0;
}

body .comment-container .avatar-container {
	margin-right: 12px;
}

body .comment-container .avatar-container a {
	display: flex;
}

body .comment-container .avatar-container img.avatar,
body .comment-container .avatar-container .avatar-icon svg {
	margin-right: 0;
}

.vscode-light .avatar-icon {
	filter: invert(100%);
}

body a.avatar-link:focus {
	outline-offset: 2px;
}

body .comment-container.comment,
body .comment-container.review {
	background-color: var(--vscode-editor-background);
}

.icon-button {
	display: flex;
	padding: 2px;
	background: transparent;
	border-radius: 4px;
	line-height: 0;
}

.icon-button:hover,
.section .icon-button:hover,
.section .icon-button:focus {
	background-color: var(--vscode-toolbar-hoverBackground);
}

.icon-button:focus,
.section .icon-button:focus {
	outline: 1px solid var(--vscode-focusBorder);
	outline-offset: unset;
}

.review-comment-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
}

body .comment-container .review-comment-header {
	position: relative;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	padding: 8px 16px;
	color: var(--vscode-foreground);
	align-items: center;
	background: var(--vscode-editorWidget-background);
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.description-header {
	float: right;
	height: 32px;
}

.review-comment-header .comment-actions {
	margin-left: auto;
}

.review-comment-header .pending {
	color: inherit;
	font-style: italic;
}

.comment-actions button {
	background-color: transparent;
	padding: 0;
	line-height: normal;
	font-size: 11px;
}

.comment-actions button svg {
	margin-right: 0;
	height: 14px;
}

.status-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-check-details {
	display: flex;
	align-items: center;
	gap: 8px;
}

#merge-on-github {
	margin-top: 10px;
}

.status-item {
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-item:first-of-type {
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.status-item,
.form-actions {
	display: flex;
	gap: 8px;
}

.status-item-detail-text {
	display: flex;
	gap: 8px;
}

.status-check-detail-text {
	margin-right: 8px;
}

.status-section p {
	margin: 0;
}

.form-actions > input[type='submit'] {
	margin-left: auto;
}

.ready-for-review-container {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.ready-for-review-button {
	float: right;
}

.ready-for-review-icon {
	float: left;
}

.ready-for-review-heading {
	font-weight: 600;
}

.ready-for-review-meta {
	font-size: 0.9;
}

#confirm-merge {
	margin-left: auto;
}

#status-checks {
	border: 1px solid var(--vscode-editorHoverWidget-border);
	border-radius: 4px;
}

#status-checks a {
	cursor: pointer;
}

#status-checks summary {
	display: flex;
	align-items: center;
}

#status-checks-display-button {
	margin-left: auto;
}

#status-checks .avatar-link svg {
	width: 24px;
	margin-right: 0px;
	vertical-align: middle;
}

.status-check .avatar-link .avatar-icon {
	margin-right: 0px;
}

#status-checks .merge-select-container {
	display: flex;
	align-items: center;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

#status-checks .merge-select-container > * {
	margin-right: 5px;
}

#status-checks .merge-select-container > select {
	margin-left: 5px;
}

#status-checks .branch-status-container {
	display: inline-block;
}

#status-checks .branch-status-message {
	display: inline-block;
	line-height: 100%;
	padding: 16px;
}

body .comment-container .review-comment-header > span,
body .comment-container .review-comment-header > a,
body .commit .commit-message > a,
body .merged .merged-message > a {
	margin-right: 6px;
}

body .comment-container .review-comment-container .pending-label,
body .resolved-container .outdatedLabel {
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	font-weight: 600;
	border-radius: 20px;
	padding: 4px 8px;
	margin-left: 6px;
}

body .resolved-container .unresolvedLabel {
	font-style: italic;
	margin-left: 5px;
}

body .diff .diffPath {
	margin-right: 4px;
}

body .comment-container .comment-body,
.review-body {
	padding: 16px;
	border-top: none;
}

body .comment-container .review-comment-container .review-comment-body {
	display: flex;
	flex-direction: column;
	gap: 16px;
	border: none;
}

body .comment-container .comment-body > p,
body .comment-container .comment-body > div > p,
.comment-container .review-body > p {
	margin-top: 0;
	line-height: 1.5em;
}

body .comment-container .comment-body > p:last-child,
body .comment-container .comment-body > div > p:last-child,
.comment-container .review-body > p:last-child {
	margin-bottom: 0;
}

body {
	margin: auto;
	width: 100%;
	max-width: 1280px;
	padding: 0 32px;
	box-sizing: border-box;
}

body .hidden-focusable {
	height: 0 !important;
	overflow: hidden;
}

.comment-actions button:hover:enabled,
.comment-actions button:focus:enabled {
	background-color: transparent;
}

body button.checkedOut {
	color: var(--vscode-foreground);
	opacity: 1 !important;
	border: none;
	background-color: transparent;
}

body button .icon {
	width: 16px;
	height: 16px;
}

.prIcon {
	display: flex;
	border-radius: 10px;
	margin-right: 5px;
	margin-top: 18px;
}

.overview-title h2 {
	font-size: 32px;
}

.overview-title textarea {
	min-height: 50px;
}

.title-container {
	width: 100%;
}

.subtitle {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 12px;
}

.subtitle .avatar,
.subtitle .avatar-icon svg {
	margin-right: 6px;
}

.subtitle .author {
	display: flex;
	align-items: center;
}

.merge-branches {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	flex-wrap: wrap;
}

.branch-tag {
	padding: 2px 4px;
	background: var(--vscode-editorInlayHint-background);
	color: var(--vscode-editorInlayHint-foreground);
	border-radius: 4px;
}

.subtitle .created-at {
	margin-left: auto;
	white-space: nowrap;
}

.button-group {
	display: flex;
	gap: 8px;
}

.small-button {
	display: flex;
	font-size: 11px;
	font-weight: 600;
	padding: 0 5px;
}

#status {
	box-sizing: border-box;
	line-height: 18px;
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	border-radius: 18px;
	padding: 4px 8px;
	margin-right: 10px;
}

.section {
	padding-bottom: 24px;
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.section:last-of-type {
	padding-bottom: 0px;
	border-bottom: none;
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.section-header .section-title {
	font-weight: 600;
}

.section-placeholder {
	color: var(--vscode-descriptionForeground);
}

.assign-yourself:hover {
	cursor: pointer;
}

.section svg {
	width: 16px;
	height: 16px;
	display: block;
	margin-right: 0;
}

.labels-list {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.label {
	display: flex;
	justify-content: normal;
	padding: 0 2px 0 8px;
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	line-height: 18px;
	font-weight: 600;
}

.label .icon-button:hover,
.label .icon-button:focus {
	background-color: transparent;
}

.commit svg {
	width: 16px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.comment-container.commit {
	border: none;
	padding: 4px 16px;
}

.comment-container.commit,
.comment-container.merged {
	box-sizing: border-box;
}

.commit,
.review,
.merged {
	display: flex;
	width: 100%;
	border: none;
	color: var(--vscode-foreground);
}

.review {
	margin: 0px 8px;
	padding: 4px 0;
}

.commit .commit-message,
.merged .merged-message {
	display: flex;
	align-items: center;
	overflow: hidden;
	flex-grow: 1;
}

.commit .commit-message .avatar-container,
.merged .merged-message .avatar-container {
	margin-right: 4px;
	flex-shrink: 0;
}

.commit .avatar-container .avatar,
.commit .avatar-container .avatar-icon,
.commit .avatar-container .avatar-icon svg,
.merged .avatar-container .avatar,
.merged .avatar-container .avatar-icon,
.merged .avatar-container .avatar-icon svg {
	width: 18px;
	height: 18px;
}

.message-container {
	display: inline-grid;
}

.commit .commit-message .message,
.merged .merged-message .message {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.sha-with-timestamp {
	display: flex;
	align-items: center;
	gap: 8px;
}

.commit .sha {
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	margin-bottom: -2px;
}

.merged .merged-message .message,
.merged .inline-sha {
	margin: 0 4px 0 0;
}

.merged svg {
	width: 14px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.details {
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
}

#description .comment-container {
	padding-top: 0px;
}

.comment-container {
	position: relative;
	width: 100%;
	display: flex;
	margin: 0;
	align-items: center;
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.comment-container[data-type='commit'] {
	padding: 8px 0;
	border: none;
}

.comment-container[data-type='commit'] + .comment-container[data-type='commit'] {
	border-top: none;
}

.comment-body .review-comment {
	box-sizing: border-box;
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
}

.resolve-comment-row {
	display: flex;
	align-items: center;
	padding: 16px;
	background-color: var(--vscode-editorHoverWidget-background);
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.review-comment-container .review-comment .review-comment-header {
	padding: 16px 16px 8px 16px;
	border: none;
	background: none;
}

.review-comment-container .review-comment .comment-body {
	border: none;
	padding: 0px 16px 8px 16px;
}

.review-comment-container .review-comment .comment-body:last-of-type {
	padding: 0px 16px 16px 16px;
}

.comment-body .line {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 8px;
}

body .comment-form {
	padding: 20px 0 10px;
}

.review-comment-container .comment-form {
	margin: 0 0 0 36px;
	padding: 10px 0;
}

.task-list-item {
	list-style-type: none;
}

#status-checks textarea {
	margin: 10px 0;
}

textarea {
	min-height: 100px;
	max-height: 500px;
}

.editing-form {
	padding: 5px 0;
	display: flex;
	flex-direction: column;
	min-width: 300px;
}

.editing-form .form-actions {
	display: flex;
	gap: 8px;
}

.comment-form .form-actions > button,
.comment-form .form-actions > input[type='submit'] {
	margin-right: 0;
	margin-left: 0;
}

.comment-form .form-actions > .push-right {
	margin-left: auto;
}

.comment-form .form-actions > #close {
	margin-left: 0;
	margin-right: auto;
}

.form-actions {
	display: flex;
	padding-top: 10px;
}

.main-comment-form > .form-actions {
	margin-bottom: 10px;
}

body .comment-form .form-actions button {
	margin-right: 10px;
}

.details .comment-body {
	padding: 19px 0;
}

blockquote {
	display: block;
	flex-direction: column;
	margin: 8px 0;
	padding: 8px 12px;
	border-left-width: 5px;
	border-left-style: solid;
}

blockquote p {
	margin: 8px 0;
}

blockquote p:first-child {
	margin-top: 0;
}

blockquote p:last-child {
	margin-bottom: 0;
}

.comment-body a:focus,
.comment-body input:focus,
.comment-body select:focus,
.comment-body textarea:focus {
	outline-offset: -1px;
}

.comment-body hr {
	border: 0;
	height: 2px;
	border-bottom: 2px solid;
}

.comment-body h1 {
	padding-bottom: 0.3em;
	line-height: 1.2;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.comment-body h1,
h2,
h3 {
	font-weight: normal;
}

.comment-body h1 code,
.comment-body h2 code,
.comment-body h3 code,
.comment-body h4 code,
.comment-body h5 code,
.comment-body h6 code {
	font-size: inherit;
	line-height: auto;
}

.comment-body table {
	border-collapse: collapse;
}

.comment-body table > thead > tr > th {
	text-align: left;
	border-bottom: 1px solid;
}

.comment-body table > thead > tr > th,
.comment-body table > thead > tr > td,
.comment-body table > tbody > tr > th,
.comment-body table > tbody > tr > td {
	padding: 5px 10px;
}

.comment-body table > tbody > tr + tr > td {
	border-top: 1px solid;
}

code {
	font-family: Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback';
}

.comment-body .snippet-clipboard-content {
	display: grid;
}

.comment-body video {
	width: 100%;
	border: 1px solid var(--vscode-editorWidget-border);
	border-radius: 4px;
}

.comment-body summary {
	margin-bottom: 8px;
}

.comment-body details summary::marker {
	display: flex;
}

.comment-body details summary svg {
	margin-left: 8px;
}

.comment-body body.wordWrap pre {
	white-space: pre-wrap;
}

.comment-body .mac code {
	font-size: 12px;
	line-height: 18px;
}

.comment-body pre:not(.hljs),
.comment-body pre.hljs code > div {
	padding: 16px;
	border-radius: 3px;
	overflow: auto;
}

.timestamp,
.timestamp:hover {
	color: inherit;
	white-space: nowrap;
}

/** Theming */

.comment-body pre code {
	color: var(--vscode-editor-foreground);
}

.vscode-light .comment-body pre:not(.hljs),
.vscode-light .comment-body code > div {
	background-color: rgba(220, 220, 220, 0.4);
}

.vscode-dark .comment-body pre:not(.hljs),
.vscode-dark .comment-body code > div {
	background-color: rgba(10, 10, 10, 0.4);
}

.vscode-high-contrast .comment-body pre:not(.hljs),
.vscode-high-contrast .comment-body code > div {
	background-color: rgb(0, 0, 0);
}

.vscode-high-contrast .comment-body h1 {
	border: 1px solid rgb(0, 0, 0);
}

.vscode-high-contrast .comment-container .review-comment-header,
.vscode-high-contrast #status-checks {
	background: none;
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-container .comment-body,
.vscode-high-contrast .review-comment-container .review-body {
	border: 1px solid var(--vscode-panel-border);
}

.vscode-light .comment-body table > thead > tr > th {
	border-color: rgba(0, 0, 0, 0.69);
}

.vscode-dark .comment-body table > thead > tr > th {
	border-color: rgba(255, 255, 255, 0.69);
}

.vscode-light .comment-body h1,
.vscode-light .comment-body hr,
.vscode-light .comment-body table > tbody > tr + tr > td {
	border-color: rgba(0, 0, 0, 0.18);
}

.vscode-dark .comment-body h1,
.vscode-dark .comment-body hr,
.vscode-dark .comment-body table > tbody > tr + tr > td {
	border-color: rgba(255, 255, 255, 0.18);
}

.review-comment-body .diff-container {
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.review-comment-body .diff-container .review-comment-container .comment-container {
	padding-top: 0;
}

.review-comment-body .diff-container .comment-container {
	border: none;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar-container {
	margin-right: 4px;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar {
	width: 18px;
	height: 18px;
}

.resolved-container {
	padding: 6px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--vscode-editorWidget-background);
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.resolved-container .diffPath:hover {
	text-decoration: underline;
	color: var(--vscode-textLink-activeForeground);
	cursor: pointer;
}

.win32 .diff .diffLine {
	font-family: Consolas, Inconsolata, 'Courier New', monospace;
}

.darwin .diff .diffLine {
	font-family: Monaco, Menlo, Inconsolata, 'Courier New', monospace;
}

.linux .diff .diffLine {
	font-family: 'Droid Sans Mono', Inconsolata, 'Courier New', monospace, 'Droid Sans Fallback';
}

.diff .diffLine.add {
	background-color: var(--vscode-diffEditor-insertedTextBackground);
}

.diff .diffLine.delete {
	background-color: var(--vscode-diffEditor-removedTextBackground);
}

.diff .diffLine .diffTypeSign {
	user-select: none;
	padding-right: 5px;
}

.diff .diffLine .lineNumber {
	width: 1%;
	min-width: 50px;
	padding-right: 10px;
	padding-left: 10px;
	font-size: 12px;
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	vertical-align: top;
	box-sizing: border-box;
	display: inline-block;
	user-select: none;
	font-family: var(--vscode-editor-font-family);
}

.github-checkbox {
	pointer-events: none;
}

.github-checkbox input {
	color: rgb(84, 84, 84);
	opacity: 0.6;
}

/* High Contrast Mode */

.vscode-high-contrast a:focus {
	outline-color: var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast .title {
	border-bottom: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine {
	background: none;
}

.vscode-high-contrast .resolved-container {
	background: none;
}

.vscode-high-contrast .diff-container {
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine.add {
	border: 1px dashed var(--vscode-diffEditor-insertedTextBorder);
}

.vscode-high-contrast .diff .diffLine.delete {
	border: 1px dashed var(--vscode-diffEditor-removedTextBorder);
}

@media (max-width: 925px) {
	#app {
		display: block;
	}

	#sidebar {
		display: grid;
		column-gap: 20px;
		grid-template-columns: 50% 50%;
		padding: 0;
	}

	.section-content {
		display: flex;
		flex-wrap: wrap;
	}

	.section-item {
		display: flex;
	}

	body .hidden-focusable {
		height: initial;
		overflow: initial;
	}

	.section-header button {
		margin-left: 8px;
		display: flex;
	}

	.section-item .login {
		width: auto;
		margin-right: 4px;
	}

	/* Hides bottom borders on bottom two sections */
	.section:nth-last-child(-n + 2) {
		border-bottom: none;
	}
}

.icon {
	width: 16px;
	height: 16px;
	font-size: 16px;
	display: flex;
}

.action-bar {
	position: absolute;
	display: flex;
	justify-content: space-between;
	z-index: 100;
	top: 9px;
	right: 9px;
}

.flex-action-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	margin-left: 9px;
	min-width: 42px;
}

.action-bar > button,
.flex-action-bar > button {
	margin-left: 4px;
	margin-right: 4px;
}

.title-editing-form {
	flex-grow: 1;
}

.title-editing-form > .form-actions {
	margin-left: 0;
}
`,""]);const v=$},645:Q=>{"use strict";Q.exports=function(M){var G=[];return G.toString=o(function(){return this.map(function(J){var $=M(J);return J[2]?"@media ".concat(J[2]," {").concat($,"}"):$}).join("")},"toString"),G.i=function(te,J,$){typeof te=="string"&&(te=[[null,te,""]]);var v={};if($)for(var p=0;p<this.length;p++){var D=this[p][0];D!=null&&(v[D]=!0)}for(var V=0;V<te.length;V++){var s=[].concat(te[V]);$&&v[s[0]]||(J&&(s[2]?s[2]="".concat(J," and ").concat(s[2]):s[2]=J),G.push(s))}},G}},484:function(Q){(function(M,G){Q.exports=G()})(this,function(){"use strict";var M="millisecond",G="second",te="minute",J="hour",$="day",v="week",p="month",D="quarter",V="year",s="date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,fe={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},Te=o(function(A,N,O){var j=String(A);return!j||j.length>=N?A:""+Array(N+1-j.length).join(O)+A},"$"),_e={s:Te,z:function(A){var N=-A.utcOffset(),O=Math.abs(N),j=Math.floor(O/60),K=O%60;return(N<=0?"+":"-")+Te(j,2,"0")+":"+Te(K,2,"0")},m:o(function A(N,O){if(N.date()<O.date())return-A(O,N);var j=12*(O.year()-N.year())+(O.month()-N.month()),K=N.clone().add(j,p),oe=O-K<0,ne=N.clone().add(j+(oe?-1:1),p);return+(-(j+(O-K)/(oe?K-ne:ne-K))||0)},"t"),a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:p,y:V,w:v,d:$,D:s,h:J,m:te,s:G,ms:M,Q:D}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},z="en",Y={};Y[z]=fe;var ae=o(function(A){return A instanceof W},"m"),T=o(function(A,N,O){var j;if(!A)return z;if(typeof A=="string")Y[A]&&(j=A),N&&(Y[A]=N,j=A);else{var K=A.name;Y[K]=A,j=K}return!O&&j&&(z=j),j||!O&&z},"D"),E=o(function(A,N){if(ae(A))return A.clone();var O=typeof N=="object"?N:{};return O.date=A,O.args=arguments,new W(O)},"v"),_=_e;_.l=T,_.i=ae,_.w=function(A,N){return E(A,{locale:N.$L,utc:N.$u,x:N.$x,$offset:N.$offset})};var W=function(){function A(O){this.$L=T(O.locale,null,!0),this.parse(O)}o(A,"d");var N=A.prototype;return N.parse=function(O){this.$d=function(j){var K=j.date,oe=j.utc;if(K===null)return new Date(NaN);if(_.u(K))return new Date;if(K instanceof Date)return new Date(K);if(typeof K=="string"&&!/Z$/i.test(K)){var ne=K.match(B);if(ne){var ie=ne[2]-1||0,me=(ne[7]||"0").substring(0,3);return oe?new Date(Date.UTC(ne[1],ie,ne[3]||1,ne[4]||0,ne[5]||0,ne[6]||0,me)):new Date(ne[1],ie,ne[3]||1,ne[4]||0,ne[5]||0,ne[6]||0,me)}}return new Date(K)}(O),this.$x=O.x||{},this.init()},N.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},N.$utils=function(){return _},N.isValid=function(){return this.$d.toString()!=="Invalid Date"},N.isSame=function(O,j){var K=E(O);return this.startOf(j)<=K&&K<=this.endOf(j)},N.isAfter=function(O,j){return E(O)<this.startOf(j)},N.isBefore=function(O,j){return this.endOf(j)<E(O)},N.$g=function(O,j,K){return _.u(O)?this[j]:this.set(K,O)},N.unix=function(){return Math.floor(this.valueOf()/1e3)},N.valueOf=function(){return this.$d.getTime()},N.startOf=function(O,j){var K=this,oe=!!_.u(j)||j,ne=_.p(O),ie=o(function(nt,Re){var I=_.w(K.$u?Date.UTC(K.$y,Re,nt):new Date(K.$y,Re,nt),K);return oe?I:I.endOf($)},"$"),me=o(function(nt,Re){return _.w(K.toDate()[nt].apply(K.toDate("s"),(oe?[0,0,0,0]:[23,59,59,999]).slice(Re)),K)},"l"),be=this.$W,Me=this.$M,Fe=this.$D,Ae="set"+(this.$u?"UTC":"");switch(ne){case V:return oe?ie(1,0):ie(31,11);case p:return oe?ie(1,Me):ie(0,Me+1);case v:var Ze=this.$locale().weekStart||0,Xe=(be<Ze?be+7:be)-Ze;return ie(oe?Fe-Xe:Fe+(6-Xe),Me);case $:case s:return me(Ae+"Hours",0);case J:return me(Ae+"Minutes",1);case te:return me(Ae+"Seconds",2);case G:return me(Ae+"Milliseconds",3);default:return this.clone()}},N.endOf=function(O){return this.startOf(O,!1)},N.$set=function(O,j){var K,oe=_.p(O),ne="set"+(this.$u?"UTC":""),ie=(K={},K[$]=ne+"Date",K[s]=ne+"Date",K[p]=ne+"Month",K[V]=ne+"FullYear",K[J]=ne+"Hours",K[te]=ne+"Minutes",K[G]=ne+"Seconds",K[M]=ne+"Milliseconds",K)[oe],me=oe===$?this.$D+(j-this.$W):j;if(oe===p||oe===V){var be=this.clone().set(s,1);be.$d[ie](me),be.init(),this.$d=be.set(s,Math.min(this.$D,be.daysInMonth())).$d}else ie&&this.$d[ie](me);return this.init(),this},N.set=function(O,j){return this.clone().$set(O,j)},N.get=function(O){return this[_.p(O)]()},N.add=function(O,j){var K,oe=this;O=Number(O);var ne=_.p(j),ie=o(function(Me){var Fe=E(oe);return _.w(Fe.date(Fe.date()+Math.round(Me*O)),oe)},"d");if(ne===p)return this.set(p,this.$M+O);if(ne===V)return this.set(V,this.$y+O);if(ne===$)return ie(1);if(ne===v)return ie(7);var me=(K={},K[te]=6e4,K[J]=36e5,K[G]=1e3,K)[ne]||1,be=this.$d.getTime()+O*me;return _.w(be,this)},N.subtract=function(O,j){return this.add(-1*O,j)},N.format=function(O){var j=this;if(!this.isValid())return"Invalid Date";var K=O||"YYYY-MM-DDTHH:mm:ssZ",oe=_.z(this),ne=this.$locale(),ie=this.$H,me=this.$m,be=this.$M,Me=ne.weekdays,Fe=ne.months,Ae=o(function(Re,I,U,he){return Re&&(Re[I]||Re(j,K))||U[I].substr(0,he)},"h"),Ze=o(function(Re){return _.s(ie%12||12,Re,"0")},"d"),Xe=ne.meridiem||function(Re,I,U){var he=Re<12?"AM":"PM";return U?he.toLowerCase():he},nt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:be+1,MM:_.s(be+1,2,"0"),MMM:Ae(ne.monthsShort,be,Fe,3),MMMM:Ae(Fe,be),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:Ae(ne.weekdaysMin,this.$W,Me,2),ddd:Ae(ne.weekdaysShort,this.$W,Me,3),dddd:Me[this.$W],H:String(ie),HH:_.s(ie,2,"0"),h:Ze(1),hh:Ze(2),a:Xe(ie,me,!0),A:Xe(ie,me,!1),m:String(me),mm:_.s(me,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:oe};return K.replace(q,function(Re,I){return I||nt[Re]||oe.replace(":","")})},N.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},N.diff=function(O,j,K){var oe,ne=_.p(j),ie=E(O),me=6e4*(ie.utcOffset()-this.utcOffset()),be=this-ie,Me=_.m(this,ie);return Me=(oe={},oe[V]=Me/12,oe[p]=Me,oe[D]=Me/3,oe[v]=(be-me)/6048e5,oe[$]=(be-me)/864e5,oe[J]=be/36e5,oe[te]=be/6e4,oe[G]=be/1e3,oe)[ne]||be,K?Me:_.a(Me)},N.daysInMonth=function(){return this.endOf(p).$D},N.$locale=function(){return Y[this.$L]},N.locale=function(O,j){if(!O)return this.$L;var K=this.clone(),oe=T(O,j,!0);return oe&&(K.$L=oe),K},N.clone=function(){return _.w(this.$d,this)},N.toDate=function(){return new Date(this.valueOf())},N.toJSON=function(){return this.isValid()?this.toISOString():null},N.toISOString=function(){return this.$d.toISOString()},N.toString=function(){return this.$d.toUTCString()},A}(),P=W.prototype;return E.prototype=P,[["$ms",M],["$s",G],["$m",te],["$H",J],["$W",$],["$M",p],["$y",V],["$D",s]].forEach(function(A){P[A[1]]=function(N){return this.$g(N,A[0],A[1])}}),E.extend=function(A,N){return A.$i||(A(N,W,E),A.$i=!0),E},E.locale=T,E.isDayjs=ae,E.unix=function(A){return E(1e3*A)},E.en=Y[z],E.Ls=Y,E.p={},E})},110:function(Q){(function(M,G){Q.exports=G()})(this,function(){"use strict";return function(M,G,te){M=M||{};var J=G.prototype,$={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function v(D,V,s,B){return J.fromToBase(D,V,s,B)}o(v,"i"),te.en.relativeTime=$,J.fromToBase=function(D,V,s,B,q){for(var fe,Te,_e,z=s.$locale().relativeTime||$,Y=M.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ae=Y.length,T=0;T<ae;T+=1){var E=Y[T];E.d&&(fe=B?te(D).diff(s,E.d,!0):s.diff(D,E.d,!0));var _=(M.rounding||Math.round)(Math.abs(fe));if(_e=fe>0,_<=E.r||!E.r){_<=1&&T>0&&(E=Y[T-1]);var W=z[E.l];q&&(_=q(""+_)),Te=typeof W=="string"?W.replace("%d",_):W(_,V,E.l,_e);break}}if(V)return Te;var P=_e?z.future:z.past;return typeof P=="function"?P(Te):P.replace("%s",Te)},J.to=function(D,V){return v(D,V,this,!0)},J.from=function(D,V){return v(D,V,this)};var p=o(function(D){return D.$u?te.utc():te()},"d");J.toNow=function(D){return this.to(p(this),D)},J.fromNow=function(D){return this.from(p(this),D)}}})},660:function(Q){(function(M,G){Q.exports=G()})(this,function(){"use strict";return function(M,G,te){te.updateLocale=function(J,$){var v=te.Ls[J];if(v)return($?Object.keys($):[]).forEach(function(p){v[p]=$[p]}),v}}})},187:Q=>{"use strict";var M=typeof Reflect=="object"?Reflect:null,G=M&&typeof M.apply=="function"?M.apply:o(function(E,_,W){return Function.prototype.apply.call(E,_,W)},"ReflectApply"),te;M&&typeof M.ownKeys=="function"?te=M.ownKeys:Object.getOwnPropertySymbols?te=o(function(E){return Object.getOwnPropertyNames(E).concat(Object.getOwnPropertySymbols(E))},"ReflectOwnKeys"):te=o(function(E){return Object.getOwnPropertyNames(E)},"ReflectOwnKeys");function J(T){console&&console.warn&&console.warn(T)}o(J,"ProcessEmitWarning");var $=Number.isNaN||o(function(E){return E!==E},"NumberIsNaN");function v(){v.init.call(this)}o(v,"EventEmitter"),Q.exports=v,Q.exports.once=ae,v.EventEmitter=v,v.prototype._events=void 0,v.prototype._eventsCount=0,v.prototype._maxListeners=void 0;var p=10;function D(T){if(typeof T!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof T)}o(D,"checkListener"),Object.defineProperty(v,"defaultMaxListeners",{enumerable:!0,get:function(){return p},set:function(T){if(typeof T!="number"||T<0||$(T))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+T+".");p=T}}),v.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},v.prototype.setMaxListeners=o(function(E){if(typeof E!="number"||E<0||$(E))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+E+".");return this._maxListeners=E,this},"setMaxListeners");function V(T){return T._maxListeners===void 0?v.defaultMaxListeners:T._maxListeners}o(V,"_getMaxListeners"),v.prototype.getMaxListeners=o(function(){return V(this)},"getMaxListeners"),v.prototype.emit=o(function(E){for(var _=[],W=1;W<arguments.length;W++)_.push(arguments[W]);var P=E==="error",A=this._events;if(A!==void 0)P=P&&A.error===void 0;else if(!P)return!1;if(P){var N;if(_.length>0&&(N=_[0]),N instanceof Error)throw N;var O=new Error("Unhandled error."+(N?" ("+N.message+")":""));throw O.context=N,O}var j=A[E];if(j===void 0)return!1;if(typeof j=="function")G(j,this,_);else for(var K=j.length,oe=_e(j,K),W=0;W<K;++W)G(oe[W],this,_);return!0},"emit");function s(T,E,_,W){var P,A,N;if(D(_),A=T._events,A===void 0?(A=T._events=Object.create(null),T._eventsCount=0):(A.newListener!==void 0&&(T.emit("newListener",E,_.listener?_.listener:_),A=T._events),N=A[E]),N===void 0)N=A[E]=_,++T._eventsCount;else if(typeof N=="function"?N=A[E]=W?[_,N]:[N,_]:W?N.unshift(_):N.push(_),P=V(T),P>0&&N.length>P&&!N.warned){N.warned=!0;var O=new Error("Possible EventEmitter memory leak detected. "+N.length+" "+String(E)+" listeners added. Use emitter.setMaxListeners() to increase limit");O.name="MaxListenersExceededWarning",O.emitter=T,O.type=E,O.count=N.length,J(O)}return T}o(s,"_addListener"),v.prototype.addListener=o(function(E,_){return s(this,E,_,!1)},"addListener"),v.prototype.on=v.prototype.addListener,v.prototype.prependListener=o(function(E,_){return s(this,E,_,!0)},"prependListener");function B(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}o(B,"onceWrapper");function q(T,E,_){var W={fired:!1,wrapFn:void 0,target:T,type:E,listener:_},P=B.bind(W);return P.listener=_,W.wrapFn=P,P}o(q,"_onceWrap"),v.prototype.once=o(function(E,_){return D(_),this.on(E,q(this,E,_)),this},"once"),v.prototype.prependOnceListener=o(function(E,_){return D(_),this.prependListener(E,q(this,E,_)),this},"prependOnceListener"),v.prototype.removeListener=o(function(E,_){var W,P,A,N,O;if(D(_),P=this._events,P===void 0)return this;if(W=P[E],W===void 0)return this;if(W===_||W.listener===_)--this._eventsCount==0?this._events=Object.create(null):(delete P[E],P.removeListener&&this.emit("removeListener",E,W.listener||_));else if(typeof W!="function"){for(A=-1,N=W.length-1;N>=0;N--)if(W[N]===_||W[N].listener===_){O=W[N].listener,A=N;break}if(A<0)return this;A===0?W.shift():z(W,A),W.length===1&&(P[E]=W[0]),P.removeListener!==void 0&&this.emit("removeListener",E,O||_)}return this},"removeListener"),v.prototype.off=v.prototype.removeListener,v.prototype.removeAllListeners=o(function(E){var _,W,P;if(W=this._events,W===void 0)return this;if(W.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):W[E]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete W[E]),this;if(arguments.length===0){var A=Object.keys(W),N;for(P=0;P<A.length;++P)N=A[P],N!=="removeListener"&&this.removeAllListeners(N);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(_=W[E],typeof _=="function")this.removeListener(E,_);else if(_!==void 0)for(P=_.length-1;P>=0;P--)this.removeListener(E,_[P]);return this},"removeAllListeners");function fe(T,E,_){var W=T._events;if(W===void 0)return[];var P=W[E];return P===void 0?[]:typeof P=="function"?_?[P.listener||P]:[P]:_?Y(P):_e(P,P.length)}o(fe,"_listeners"),v.prototype.listeners=o(function(E){return fe(this,E,!0)},"listeners"),v.prototype.rawListeners=o(function(E){return fe(this,E,!1)},"rawListeners"),v.listenerCount=function(T,E){return typeof T.listenerCount=="function"?T.listenerCount(E):Te.call(T,E)},v.prototype.listenerCount=Te;function Te(T){var E=this._events;if(E!==void 0){var _=E[T];if(typeof _=="function")return 1;if(_!==void 0)return _.length}return 0}o(Te,"listenerCount"),v.prototype.eventNames=o(function(){return this._eventsCount>0?te(this._events):[]},"eventNames");function _e(T,E){for(var _=new Array(E),W=0;W<E;++W)_[W]=T[W];return _}o(_e,"arrayClone");function z(T,E){for(;E+1<T.length;E++)T[E]=T[E+1];T.pop()}o(z,"spliceOne");function Y(T){for(var E=new Array(T.length),_=0;_<E.length;++_)E[_]=T[_].listener||T[_];return E}o(Y,"unwrapListeners");function ae(T,E){return new Promise(function(_,W){function P(){A!==void 0&&T.removeListener("error",A),_([].slice.call(arguments))}o(P,"eventListener");var A;E!=="error"&&(A=o(function(O){T.removeListener(E,P),W(O)},"errorListener"),T.once("error",A)),T.once(E,P)})}o(ae,"once")},418:Q=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var M=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;function J(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}o(J,"toObject");function $(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var p={},D=0;D<10;D++)p["_"+String.fromCharCode(D)]=D;var V=Object.getOwnPropertyNames(p).map(function(B){return p[B]});if(V.join("")!=="0123456789")return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(B){s[B]=B}),Object.keys(Object.assign({},s)).join("")==="abcdefghijklmnopqrst"}catch(B){return!1}}o($,"shouldUseNative"),Q.exports=$()?Object.assign:function(v,p){for(var D,V=J(v),s,B=1;B<arguments.length;B++){D=Object(arguments[B]);for(var q in D)G.call(D,q)&&(V[q]=D[q]);if(M){s=M(D);for(var fe=0;fe<s.length;fe++)te.call(D,s[fe])&&(V[s[fe]]=D[s[fe]])}}return V}},470:Q=>{"use strict";function M($){if(typeof $!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify($))}o(M,"assertPath");function G($,v){for(var p="",D=0,V=-1,s=0,B,q=0;q<=$.length;++q){if(q<$.length)B=$.charCodeAt(q);else{if(B===47)break;B=47}if(B===47){if(!(V===q-1||s===1))if(V!==q-1&&s===2){if(p.length<2||D!==2||p.charCodeAt(p.length-1)!==46||p.charCodeAt(p.length-2)!==46){if(p.length>2){var fe=p.lastIndexOf("/");if(fe!==p.length-1){fe===-1?(p="",D=0):(p=p.slice(0,fe),D=p.length-1-p.lastIndexOf("/")),V=q,s=0;continue}}else if(p.length===2||p.length===1){p="",D=0,V=q,s=0;continue}}v&&(p.length>0?p+="/..":p="..",D=2)}else p.length>0?p+="/"+$.slice(V+1,q):p=$.slice(V+1,q),D=q-V-1;V=q,s=0}else B===46&&s!==-1?++s:s=-1}return p}o(G,"normalizeStringPosix");function te($,v){var p=v.dir||v.root,D=v.base||(v.name||"")+(v.ext||"");return p?p===v.root?p+D:p+$+D:D}o(te,"_format");var J={resolve:o(function(){for(var v="",p=!1,D,V=arguments.length-1;V>=-1&&!p;V--){var s;V>=0?s=arguments[V]:(D===void 0&&(D=process.cwd()),s=D),M(s),s.length!==0&&(v=s+"/"+v,p=s.charCodeAt(0)===47)}return v=G(v,!p),p?v.length>0?"/"+v:"/":v.length>0?v:"."},"resolve"),normalize:o(function(v){if(M(v),v.length===0)return".";var p=v.charCodeAt(0)===47,D=v.charCodeAt(v.length-1)===47;return v=G(v,!p),v.length===0&&!p&&(v="."),v.length>0&&D&&(v+="/"),p?"/"+v:v},"normalize"),isAbsolute:o(function(v){return M(v),v.length>0&&v.charCodeAt(0)===47},"isAbsolute"),join:o(function(){if(arguments.length===0)return".";for(var v,p=0;p<arguments.length;++p){var D=arguments[p];M(D),D.length>0&&(v===void 0?v=D:v+="/"+D)}return v===void 0?".":J.normalize(v)},"join"),relative:o(function(v,p){if(M(v),M(p),v===p||(v=J.resolve(v),p=J.resolve(p),v===p))return"";for(var D=1;D<v.length&&v.charCodeAt(D)===47;++D);for(var V=v.length,s=V-D,B=1;B<p.length&&p.charCodeAt(B)===47;++B);for(var q=p.length,fe=q-B,Te=s<fe?s:fe,_e=-1,z=0;z<=Te;++z){if(z===Te){if(fe>Te){if(p.charCodeAt(B+z)===47)return p.slice(B+z+1);if(z===0)return p.slice(B+z)}else s>Te&&(v.charCodeAt(D+z)===47?_e=z:z===0&&(_e=0));break}var Y=v.charCodeAt(D+z),ae=p.charCodeAt(B+z);if(Y!==ae)break;Y===47&&(_e=z)}var T="";for(z=D+_e+1;z<=V;++z)(z===V||v.charCodeAt(z)===47)&&(T.length===0?T+="..":T+="/..");return T.length>0?T+p.slice(B+_e):(B+=_e,p.charCodeAt(B)===47&&++B,p.slice(B))},"relative"),_makeLong:o(function(v){return v},"_makeLong"),dirname:o(function(v){if(M(v),v.length===0)return".";for(var p=v.charCodeAt(0),D=p===47,V=-1,s=!0,B=v.length-1;B>=1;--B)if(p=v.charCodeAt(B),p===47){if(!s){V=B;break}}else s=!1;return V===-1?D?"/":".":D&&V===1?"//":v.slice(0,V)},"dirname"),basename:o(function(v,p){if(p!==void 0&&typeof p!="string")throw new TypeError('"ext" argument must be a string');M(v);var D=0,V=-1,s=!0,B;if(p!==void 0&&p.length>0&&p.length<=v.length){if(p.length===v.length&&p===v)return"";var q=p.length-1,fe=-1;for(B=v.length-1;B>=0;--B){var Te=v.charCodeAt(B);if(Te===47){if(!s){D=B+1;break}}else fe===-1&&(s=!1,fe=B+1),q>=0&&(Te===p.charCodeAt(q)?--q==-1&&(V=B):(q=-1,V=fe))}return D===V?V=fe:V===-1&&(V=v.length),v.slice(D,V)}else{for(B=v.length-1;B>=0;--B)if(v.charCodeAt(B)===47){if(!s){D=B+1;break}}else V===-1&&(s=!1,V=B+1);return V===-1?"":v.slice(D,V)}},"basename"),extname:o(function(v){M(v);for(var p=-1,D=0,V=-1,s=!0,B=0,q=v.length-1;q>=0;--q){var fe=v.charCodeAt(q);if(fe===47){if(!s){D=q+1;break}continue}V===-1&&(s=!1,V=q+1),fe===46?p===-1?p=q:B!==1&&(B=1):p!==-1&&(B=-1)}return p===-1||V===-1||B===0||B===1&&p===V-1&&p===D+1?"":v.slice(p,V)},"extname"),format:o(function(v){if(v===null||typeof v!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof v);return te("/",v)},"format"),parse:o(function(v){M(v);var p={root:"",dir:"",base:"",ext:"",name:""};if(v.length===0)return p;var D=v.charCodeAt(0),V=D===47,s;V?(p.root="/",s=1):s=0;for(var B=-1,q=0,fe=-1,Te=!0,_e=v.length-1,z=0;_e>=s;--_e){if(D=v.charCodeAt(_e),D===47){if(!Te){q=_e+1;break}continue}fe===-1&&(Te=!1,fe=_e+1),D===46?B===-1?B=_e:z!==1&&(z=1):B!==-1&&(z=-1)}return B===-1||fe===-1||z===0||z===1&&B===fe-1&&B===q+1?fe!==-1&&(q===0&&V?p.base=p.name=v.slice(1,fe):p.base=p.name=v.slice(q,fe)):(q===0&&V?(p.name=v.slice(1,B),p.base=v.slice(1,fe)):(p.name=v.slice(q,B),p.base=v.slice(q,fe)),p.ext=v.slice(B,fe)),q>0?p.dir=v.slice(0,q-1):V&&(p.dir="/"),p},"parse"),sep:"/",delimiter:":",win32:null,posix:null};J.posix=J,Q.exports=J},448:(Q,M,G)=>{"use strict";var te;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=G(294),$=G(418),v=G(840);function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(o(p,"u"),!J)throw Error(p(227));function D(e,t,n,r,i,u,c,m,C){var k=Array.prototype.slice.call(arguments,3);try{t.apply(n,k)}catch(X){this.onError(X)}}o(D,"ba");var V=!1,s=null,B=!1,q=null,fe={onError:function(e){V=!0,s=e}};function Te(e,t,n,r,i,u,c,m,C){V=!1,s=null,D.apply(fe,arguments)}o(Te,"ja");function _e(e,t,n,r,i,u,c,m,C){if(Te.apply(this,arguments),V){if(V){var k=s;V=!1,s=null}else throw Error(p(198));B||(B=!0,q=k)}}o(_e,"ka");var z=null,Y=null,ae=null;function T(e,t,n){var r=e.type||"unknown-event";e.currentTarget=ae(n),_e(r,t,void 0,e),e.currentTarget=null}o(T,"oa");var E=null,_={};function W(){if(E)for(var e in _){var t=_[e],n=E.indexOf(e);if(!(-1<n))throw Error(p(96,e));if(!A[n]){if(!t.extractEvents)throw Error(p(97,e));A[n]=t,n=t.eventTypes;for(var r in n){var i=void 0,u=n[r],c=t,m=r;if(N.hasOwnProperty(m))throw Error(p(99,m));N[m]=u;var C=u.phasedRegistrationNames;if(C){for(i in C)C.hasOwnProperty(i)&&P(C[i],c,m);i=!0}else u.registrationName?(P(u.registrationName,c,m),i=!0):i=!1;if(!i)throw Error(p(98,r,e))}}}}o(W,"ra");function P(e,t,n){if(O[e])throw Error(p(100,e));O[e]=t,j[e]=t.eventTypes[n].dependencies}o(P,"ua");var A=[],N={},O={},j={};function K(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!_.hasOwnProperty(n)||_[n]!==r){if(_[n])throw Error(p(102,n));_[n]=r,t=!0}}t&&W()}o(K,"xa");var oe=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ne=null,ie=null,me=null;function be(e){if(e=Y(e)){if(typeof ne!="function")throw Error(p(280));var t=e.stateNode;t&&(t=z(t),ne(e.stateNode,e.type,t))}}o(be,"Ca");function Me(e){ie?me?me.push(e):me=[e]:ie=e}o(Me,"Da");function Fe(){if(ie){var e=ie,t=me;if(me=ie=null,be(e),t)for(e=0;e<t.length;e++)be(t[e])}}o(Fe,"Ea");function Ae(e,t){return e(t)}o(Ae,"Fa");function Ze(e,t,n,r,i){return e(t,n,r,i)}o(Ze,"Ga");function Xe(){}o(Xe,"Ha");var nt=Ae,Re=!1,I=!1;function U(){(ie!==null||me!==null)&&(Xe(),Fe())}o(U,"La");function he(e,t,n){if(I)return e(t,n);I=!0;try{return nt(e,t,n)}finally{I=!1,U()}}o(he,"Ma");var y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L=Object.prototype.hasOwnProperty,de={},we={};function le(e){return L.call(we,e)?!0:L.call(de,e)?!1:y.test(e)?we[e]=!0:(de[e]=!0,!1)}o(le,"Ra");function Ie(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}o(Ie,"Sa");function rt(e,t,n,r){if(t===null||typeof t=="undefined"||Ie(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}o(rt,"Ta");function ge(e,t,n,r,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u}o(ge,"v");var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new ge(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new ge(t,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new ge(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new ge(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new ge(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new ge(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){Ne[e]=new ge(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){Ne[e]=new ge(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){Ne[e]=new ge(e,5,!1,e.toLowerCase(),null,!1)});var at=/[\-:]([a-z])/g;function Zn(e){return e[1].toUpperCase()}o(Zn,"Va"),"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(at,Zn);Ne[t]=new ge(t,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(at,Zn);Ne[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(at,Zn);Ne[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new ge(e,1,!1,e.toLowerCase(),null,!1)}),Ne.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){Ne[e]=new ge(e,1,!1,e.toLowerCase(),null,!0)});var mt=J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;mt.hasOwnProperty("ReactCurrentDispatcher")||(mt.ReactCurrentDispatcher={current:null}),mt.hasOwnProperty("ReactCurrentBatchConfig")||(mt.ReactCurrentBatchConfig={suspense:null});function _i(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null,u=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");u||(rt(t,n,i,r)&&(n=null),r||i===null?le(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}o(_i,"Xa");var yn=/^(.*)[\\\/]/,Ge=typeof Symbol=="function"&&Symbol.for,Yn=Ge?Symbol.for("react.element"):60103,Xt=Ge?Symbol.for("react.portal"):60106,_t=Ge?Symbol.for("react.fragment"):60107,bi=Ge?Symbol.for("react.strict_mode"):60108,Sr=Ge?Symbol.for("react.profiler"):60114,Ko=Ge?Symbol.for("react.provider"):60109,wn=Ge?Symbol.for("react.context"):60110,Si=Ge?Symbol.for("react.concurrent_mode"):60111,Tr=Ge?Symbol.for("react.forward_ref"):60112,qn=Ge?Symbol.for("react.suspense"):60113,Je=Ge?Symbol.for("react.suspense_list"):60120,Xn=Ge?Symbol.for("react.memo"):60115,Zo=Ge?Symbol.for("react.lazy"):60116,Ti=Ge?Symbol.for("react.block"):60121,xn=typeof Symbol=="function"&&Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=xn&&e[xn]||e["@@iterator"],typeof e=="function"?e:null)}o(En,"nb");function Yo(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}o(Yo,"ob");function bt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _t:return"Fragment";case Xt:return"Portal";case Sr:return"Profiler";case bi:return"StrictMode";case qn:return"Suspense";case Je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wn:return"Context.Consumer";case Ko:return"Context.Provider";case Tr:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Xn:return bt(e.type);case Ti:return bt(e.render);case Zo:if(e=e._status===1?e._result:null)return bt(e)}return null}o(bt,"pb");function Nr(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,u=bt(e.type);n=null,r&&(n=bt(r.type)),r=u,u="",i?u=" (at "+i.fileName.replace(yn,"")+":"+i.lineNumber+")":n&&(u=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+u}t+=n,e=e.return}while(e);return t}o(Nr,"qb");function Lt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}o(Lt,"rb");function je(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}o(je,"sb");function cs(e){var t=je(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){r=""+c,u.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}o(cs,"tb");function Gn(e){e._valueTracker||(e._valueTracker=cs(e))}o(Gn,"xb");function Ni(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=je(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}o(Ni,"yb");function Mr(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}o(Mr,"zb");function qo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}o(qo,"Ab");function Xo(e,t){t=t.checked,t!=null&&_i(e,"checked",t,!1)}o(Xo,"Bb");function Mi(e,t){Xo(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pi(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}o(Mi,"Cb");function Li(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}o(Li,"Eb");function Pi(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}o(Pi,"Db");function Ri(e){var t="";return J.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}o(Ri,"Fb");function Jn(e,t){return e=$({children:void 0},t),(t=Ri(t.children))&&(e.children=t),e}o(Jn,"Gb");function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}o(Gt,"Hb");function Lr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(p(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}o(Lr,"Ib");function Go(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(p(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(p(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}o(Go,"Jb");function Oi(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}o(Oi,"Kb");function Jo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}o(Jo,"Lb");var Pr={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Rr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}o(Rr,"Nb");function er(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}o(er,"Ob");var Cn,Di=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==Pr.svg||"innerHTML"in e)e.innerHTML=t;else{for(Cn=Cn||document.createElement("div"),Cn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}o(Jt,"Rb");function tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}o(tr,"Sb");var Bt={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionend:tr("Transition","TransitionEnd")},nr={},rr={};oe&&(rr=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function kn(e){if(nr[e])return nr[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rr)return nr[e]=t[n];return e}o(kn,"Wb");var ir=kn("animationend"),Or=kn("animationiteration"),Dr=kn("animationstart"),Ir=kn("transitionend"),en="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),or=new(typeof WeakMap=="function"?WeakMap:Map);function lr(e){var t=or.get(e);return t===void 0&&(t=new Map,or.set(e,t)),t}o(lr,"cc");function Pt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.effectTag&1026)!=0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}o(Pt,"dc");function tn(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}o(tn,"ec");function Ut(e){if(Pt(e)!==e)throw Error(p(188))}o(Ut,"fc");function _n(e){var t=e.alternate;if(!t){if(t=Pt(e),t===null)throw Error(p(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var u=i.alternate;if(u===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===n)return Ut(i),e;if(u===r)return Ut(i),t;u=u.sibling}throw Error(p(188))}if(n.return!==r.return)n=i,r=u;else{for(var c=!1,m=i.child;m;){if(m===n){c=!0,n=i,r=u;break}if(m===r){c=!0,r=i,n=u;break}m=m.sibling}if(!c){for(m=u.child;m;){if(m===n){c=!0,n=u,r=i;break}if(m===r){c=!0,r=u,n=i;break}m=m.sibling}if(!c)throw Error(p(189))}}if(n.alternate!==r)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?e:t}o(_n,"gc");function el(e){if(e=_n(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}o(el,"hc");function it(e,t){if(t==null)throw Error(p(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}o(it,"ic");function wt(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}o(wt,"jc");var Wt=null;function Ii(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)T(e,t[r],n[r]);else t&&T(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}o(Ii,"lc");function sr(e){if(e!==null&&(Wt=it(Wt,e)),e=Wt,Wt=null,e){if(wt(e,Ii),Wt)throw Error(p(95));if(B)throw e=q,B=!1,q=null,e}}o(sr,"mc");function ar(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}o(ar,"nc");function Ai(e){if(!oe)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}o(Ai,"oc");var ur=[];function tl(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ur.length&&ur.push(e)}o(tl,"qc");function Fi(e,t,n,r){if(ur.length){var i=ur.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}o(Fi,"rc");function $i(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=On(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=ar(e.nativeEvent);r=e.topLevelType;var u=e.nativeEvent,c=e.eventSystemFlags;n===0&&(c|=64);for(var m=null,C=0;C<A.length;C++){var k=A[C];k&&(k=k.extractEvents(r,t,u,i,c))&&(m=it(m,k))}sr(m)}}o($i,"sc");function Ar(e,t,n){if(!n.has(e)){switch(e){case"scroll":Pn(t,"scroll",!0);break;case"focus":case"blur":Pn(t,"focus",!0),Pn(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":Ai(e)&&Pn(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:en.indexOf(e)===-1&&$e(e,t)}n.set(e,null)}}o(Ar,"uc");var zi,Fr,ji,$r=!1,pt=[],Rt=null,Ot=null,Dt=null,bn=new Map,Sn=new Map,Tn=[],zr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),nl="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function ds(e,t){var n=lr(t);zr.forEach(function(r){Ar(r,t,n)}),nl.forEach(function(r){Ar(r,t,n)})}o(ds,"Jc");function jr(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:i,container:r}}o(jr,"Kc");function Hi(e,t){switch(e){case"focus":case"blur":Rt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}o(Hi,"Lc");function Nn(e,t,n,r,i,u){return e===null||e.nativeEvent!==u?(e=jr(t,n,r,i,u),t!==null&&(t=Dn(t),t!==null&&Fr(t)),e):(e.eventSystemFlags|=r,e)}o(Nn,"Mc");function rl(e,t,n,r,i){switch(t){case"focus":return Rt=Nn(Rt,e,t,n,r,i),!0;case"dragenter":return Ot=Nn(Ot,e,t,n,r,i),!0;case"mouseover":return Dt=Nn(Dt,e,t,n,r,i),!0;case"pointerover":var u=i.pointerId;return bn.set(u,Nn(bn.get(u)||null,e,t,n,r,i)),!0;case"gotpointercapture":return u=i.pointerId,Sn.set(u,Nn(Sn.get(u)||null,e,t,n,r,i)),!0}return!1}o(rl,"Oc");function il(e){var t=On(e.target);if(t!==null){var n=Pt(t);if(n!==null){if(t=n.tag,t===13){if(t=tn(n),t!==null){e.blockedOn=t,v.unstable_runWithPriority(e.priority,function(){ji(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}o(il,"Pc");function cr(e){if(e.blockedOn!==null)return!1;var t=Wr(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=Dn(t);return n!==null&&Fr(n),e.blockedOn=t,!1}return!0}o(cr,"Qc");function Vi(e,t,n){cr(e)&&n.delete(t)}o(Vi,"Sc");function ol(){for($r=!1;0<pt.length;){var e=pt[0];if(e.blockedOn!==null){e=Dn(e.blockedOn),e!==null&&zi(e);break}var t=Wr(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:pt.shift()}Rt!==null&&cr(Rt)&&(Rt=null),Ot!==null&&cr(Ot)&&(Ot=null),Dt!==null&&cr(Dt)&&(Dt=null),bn.forEach(Vi),Sn.forEach(Vi)}o(ol,"Tc");function Mn(e,t){e.blockedOn===t&&(e.blockedOn=null,$r||($r=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,ol)))}o(Mn,"Uc");function Bi(e){function t(i){return Mn(i,e)}if(o(t,"b"),0<pt.length){Mn(pt[0],e);for(var n=1;n<pt.length;n++){var r=pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&Mn(Rt,e),Ot!==null&&Mn(Ot,e),Dt!==null&&Mn(Dt,e),bn.forEach(t),Sn.forEach(t),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)il(n),n.blockedOn===null&&Tn.shift()}o(Bi,"Vc");var Ln={},Hr=new Map,Vr=new Map,ll=["abort","abort",ir,"animationEnd",Or,"animationIteration",Dr,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ir,"transitionEnd","waiting","waiting"];function dr(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],u="on"+(i[0].toUpperCase()+i.slice(1));u={phasedRegistrationNames:{bubbled:u,captured:u+"Capture"},dependencies:[r],eventPriority:t},Vr.set(r,t),Hr.set(r,u),Ln[i]=u}}o(dr,"ad"),dr("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),dr("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),dr(ll,2);for(var Ui="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Br=0;Br<Ui.length;Br++)Vr.set(Ui[Br],0);var sl=v.unstable_UserBlockingPriority,Wi=v.unstable_runWithPriority,fr=!0;function $e(e,t){Pn(t,e,!1)}o($e,"F");function Pn(e,t,n){var r=Vr.get(t);switch(r===void 0?2:r){case 0:r=al.bind(null,t,1,e);break;case 1:r=Ur.bind(null,t,1,e);break;default:r=nn.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}o(Pn,"vc");function al(e,t,n,r){Re||Xe();var i=nn,u=Re;Re=!0;try{Ze(i,e,t,n,r)}finally{(Re=u)||U()}}o(al,"gd");function Ur(e,t,n,r){Wi(sl,nn.bind(null,e,t,n,r))}o(Ur,"hd");function nn(e,t,n,r){if(fr)if(0<pt.length&&-1<zr.indexOf(e))e=jr(null,e,t,n,r),pt.push(e);else{var i=Wr(e,t,n,r);if(i===null)Hi(e,r);else if(-1<zr.indexOf(e))e=jr(i,e,t,n,r),pt.push(e);else if(!rl(i,e,t,n,r)){Hi(e,r),e=Fi(e,r,null,t);try{he($i,e)}finally{tl(e)}}}}o(nn,"id");function Wr(e,t,n,r){if(n=ar(r),n=On(n),n!==null){var i=Pt(n);if(i===null)n=null;else{var u=i.tag;if(u===13){if(n=tn(i),n!==null)return n;n=null}else if(u===3){if(i.stateNode.hydrate)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=Fi(e,r,n,t);try{he($i,e)}finally{tl(e)}return null}o(Wr,"Rc");var rn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qi=["Webkit","ms","Moz","O"];Object.keys(rn).forEach(function(e){Qi.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rn[t]=rn[e]})});function Ki(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rn.hasOwnProperty(e)&&rn[e]?(""+t).trim():t+"px"}o(Ki,"ld");function Zi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ki(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}o(Zi,"md");var Yi=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qr(e,t){if(t){if(Yi[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(p(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(p(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(p(61))}if(t.style!=null&&typeof t.style!="object")throw Error(p(62,""))}}o(Qr,"od");function qi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}o(qi,"pd");var Xi=Pr.html;function It(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=lr(e);t=j[t];for(var r=0;r<t.length;r++)Ar(t[r],e,n)}o(It,"rd");function mr(){}o(mr,"sd");function Kr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}o(Kr,"td");function Gi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}o(Gi,"ud");function Ji(e,t){var n=Gi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gi(n)}}o(Ji,"vd");function Zr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}o(Zr,"wd");function eo(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}o(eo,"xd");function Yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}o(Yr,"yd");var ul="$",to="/$",qr="$?",Xr="$!",Gr=null,Jr=null;function no(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}o(no,"Fd");function ei(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}o(ei,"Gd");var ti=typeof setTimeout=="function"?setTimeout:void 0,cl=typeof clearTimeout=="function"?clearTimeout:void 0;function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}o(on,"Jd");function ro(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===ul||n===Xr||n===qr){if(t===0)return e;t--}else n===to&&t++}e=e.previousSibling}return null}o(ro,"Kd");var ni=Math.random().toString(36).slice(2),At="__reactInternalInstance$"+ni,pr="__reactEventHandlers$"+ni,Rn="__reactContainere$"+ni;function On(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rn]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ro(e);e!==null;){if(n=e[At])return n;e=ro(e)}return t}e=n,n=e.parentNode}return null}o(On,"tc");function Dn(e){return e=e[At]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}o(Dn,"Nc");function l(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}o(l,"Pd");function a(e){return e[pr]||null}o(a,"Qd");function d(e){do e=e.return;while(e&&e.tag!==5);return e||null}o(d,"Rd");function f(e,t){var n=e.stateNode;if(!n)return null;var r=z(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(p(231,t,typeof n));return n}o(f,"Sd");function h(e,t,n){(t=f(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=it(n._dispatchListeners,t),n._dispatchInstances=it(n._dispatchInstances,e))}o(h,"Td");function g(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=d(t);for(t=n.length;0<t--;)h(n[t],"captured",e);for(t=0;t<n.length;t++)h(n[t],"bubbled",e)}}o(g,"Ud");function b(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=f(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=it(n._dispatchListeners,t),n._dispatchInstances=it(n._dispatchInstances,e))}o(b,"Vd");function R(e){e&&e.dispatchConfig.registrationName&&b(e._targetInst,null,e)}o(R,"Wd");function F(e){wt(e,g)}o(F,"Xd");var ce=null,ve=null,se=null;function Ve(){if(se)return se;var e,t=ve,n=t.length,r,i="value"in ce?ce.value:ce.textContent,u=i.length;for(e=0;e<n&&t[e]===i[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===i[u-r];r++);return se=i.slice(e,1<r?1-r:void 0)}o(Ve,"ae");function xe(){return!0}o(xe,"be");function Oe(){return!1}o(Oe,"ce");function De(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var i in e)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):i==="target"?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?xe:Oe,this.isPropagationStopped=Oe,this}o(De,"G"),$(De.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=xe)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=xe)},persist:function(){this.isPersistent=xe},isPersistent:Oe,destructor:function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Oe,this._dispatchInstances=this._dispatchListeners=null}}),De.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},De.extend=function(e){function t(){}o(t,"b");function n(){return r.apply(this,arguments)}o(n,"c");var r=this;t.prototype=r.prototype;var i=new t;return $(i,n.prototype),n.prototype=i,n.prototype.constructor=n,n.Interface=$({},r.Interface,e),n.extend=r.extend,ut(n),n},ut(De);function et(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}o(et,"ee");function Ue(e){if(!(e instanceof this))throw Error(p(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}o(Ue,"fe");function ut(e){e.eventPool=[],e.getPooled=et,e.release=Ue}o(ut,"de");var St=De.extend({data:null}),ln=De.extend({data:null}),We=[9,13,27,32],Tt=oe&&"CompositionEvent"in window,ri=null;oe&&"documentMode"in document&&(ri=document.documentMode);var qa=oe&&"TextEvent"in window&&!ri,fs=oe&&(!Tt||ri&&8<ri&&11>=ri),ms=String.fromCharCode(32),Qt={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},ps=!1;function hs(e,t){switch(e){case"keyup":return We.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}o(hs,"qe");function vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}o(vs,"re");var hr=!1;function Xa(e,t){switch(e){case"compositionend":return vs(t);case"keypress":return t.which!==32?null:(ps=!0,ms);case"textInput":return e=t.data,e===ms&&ps?null:e;default:return null}}o(Xa,"te");function Ga(e,t){if(hr)return e==="compositionend"||!Tt&&hs(e,t)?(e=Ve(),se=ve=ce=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fs&&t.locale!=="ko"?null:t.data;default:return null}}o(Ga,"ue");var Ja={eventTypes:Qt,extractEvents:function(e,t,n,r){var i;if(Tt)e:{switch(e){case"compositionstart":var u=Qt.compositionStart;break e;case"compositionend":u=Qt.compositionEnd;break e;case"compositionupdate":u=Qt.compositionUpdate;break e}u=void 0}else hr?hs(e,n)&&(u=Qt.compositionEnd):e==="keydown"&&n.keyCode===229&&(u=Qt.compositionStart);return u?(fs&&n.locale!=="ko"&&(hr||u!==Qt.compositionStart?u===Qt.compositionEnd&&hr&&(i=Ve()):(ce=r,ve="value"in ce?ce.value:ce.textContent,hr=!0)),u=St.getPooled(u,t,n,r),i?u.data=i:(i=vs(n),i!==null&&(u.data=i)),F(u),i=u):i=null,(e=qa?Xa(e,n):Ga(e,n))?(t=ln.getPooled(Qt.beforeInput,t,n,r),t.data=e,F(t)):t=null,i===null?t:t===null?i:[i,t]}},eu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!eu[e.type]:t==="textarea"}o(gs,"xe");var ys={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ws(e,t,n){return e=De.getPooled(ys.change,e,t,n),e.type="change",Me(n),F(e),e}o(ws,"ze");var ii=null,oi=null;function tu(e){sr(e)}o(tu,"Ce");function io(e){var t=l(e);if(Ni(t))return e}o(io,"De");function nu(e,t){if(e==="change")return t}o(nu,"Ee");var dl=!1;oe&&(dl=Ai("input")&&(!document.documentMode||9<document.documentMode));function xs(){ii&&(ii.detachEvent("onpropertychange",Es),oi=ii=null)}o(xs,"Ge");function Es(e){if(e.propertyName==="value"&&io(oi))if(e=ws(oi,e,ar(e)),Re)sr(e);else{Re=!0;try{Ae(tu,e)}finally{Re=!1,U()}}}o(Es,"He");function ru(e,t,n){e==="focus"?(xs(),ii=t,oi=n,ii.attachEvent("onpropertychange",Es)):e==="blur"&&xs()}o(ru,"Ie");function iu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(oi)}o(iu,"Je");function ou(e,t){if(e==="click")return io(t)}o(ou,"Ke");function lu(e,t){if(e==="input"||e==="change")return io(t)}o(lu,"Le");var su={eventTypes:ys,_isInputEventSupported:dl,extractEvents:function(e,t,n,r){var i=t?l(t):window,u=i.nodeName&&i.nodeName.toLowerCase();if(u==="select"||u==="input"&&i.type==="file")var c=nu;else if(gs(i))if(dl)c=lu;else{c=iu;var m=ru}else(u=i.nodeName)&&u.toLowerCase()==="input"&&(i.type==="checkbox"||i.type==="radio")&&(c=ou);if(c&&(c=c(e,t)))return ws(c,n,r);m&&m(e,i,t),e==="blur"&&(e=i._wrapperState)&&e.controlled&&i.type==="number"&&Pi(i,"number",i.value)}},li=De.extend({view:null,detail:null}),au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=au[e])?!!t[e]:!1}o(uu,"Pe");function fl(){return uu}o(fl,"Qe");var Cs=0,ks=0,_s=!1,bs=!1,si=li.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:fl,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Cs;return Cs=e.screenX,_s?e.type==="mousemove"?e.screenX-t:0:(_s=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=ks;return ks=e.screenY,bs?e.type==="mousemove"?e.screenY-t:0:(bs=!0,0)}}),Ss=si.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ai={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},cu={eventTypes:ai,extractEvents:function(e,t,n,r,i){var u=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout";if(u&&(i&32)==0&&(n.relatedTarget||n.fromElement)||!c&&!u)return null;if(u=r.window===r?r:(u=r.ownerDocument)?u.defaultView||u.parentWindow:window,c){if(c=t,t=(t=n.relatedTarget||n.toElement)?On(t):null,t!==null){var m=Pt(t);(t!==m||t.tag!==5&&t.tag!==6)&&(t=null)}}else c=null;if(c===t)return null;if(e==="mouseout"||e==="mouseover")var C=si,k=ai.mouseLeave,X=ai.mouseEnter,ee="mouse";else(e==="pointerout"||e==="pointerover")&&(C=Ss,k=ai.pointerLeave,X=ai.pointerEnter,ee="pointer");if(e=c==null?u:l(c),u=t==null?u:l(t),k=C.getPooled(k,c,n,r),k.type=ee+"leave",k.target=e,k.relatedTarget=u,n=C.getPooled(X,t,n,r),n.type=ee+"enter",n.target=u,n.relatedTarget=e,r=c,ee=t,r&&ee)e:{for(C=r,X=ee,c=0,e=C;e;e=d(e))c++;for(e=0,t=X;t;t=d(t))e++;for(;0<c-e;)C=d(C),c--;for(;0<e-c;)X=d(X),e--;for(;c--;){if(C===X||C===X.alternate)break e;C=d(C),X=d(X)}C=null}else C=null;for(X=C,C=[];r&&r!==X&&(c=r.alternate,!(c!==null&&c===X));)C.push(r),r=d(r);for(r=[];ee&&ee!==X&&(c=ee.alternate,!(c!==null&&c===X));)r.push(ee),ee=d(ee);for(ee=0;ee<C.length;ee++)b(C[ee],"bubbled",k);for(ee=r.length;0<ee--;)b(r[ee],"captured",n);return(i&64)==0?[k]:[k,n]}};function du(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}o(du,"Ze");var In=typeof Object.is=="function"?Object.is:du,fu=Object.prototype.hasOwnProperty;function ui(e,t){if(In(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!fu.call(t,n[r])||!In(e[n[r]],t[n[r]]))return!1;return!0}o(ui,"bf");var mu=oe&&"documentMode"in document&&11>=document.documentMode,Ts={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},vr=null,ml=null,ci=null,pl=!1;function Ns(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return pl||vr==null||vr!==Kr(n)?null:(n=vr,"selectionStart"in n&&Yr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ci&&ui(ci,n)?null:(ci=n,e=De.getPooled(Ts.select,ml,e,t),e.type="select",e.target=vr,F(e),e))}o(Ns,"jf");var pu={eventTypes:Ts,extractEvents:function(e,t,n,r,i,u){if(i=u||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(u=!i)){e:{i=lr(i),u=j.onSelect;for(var c=0;c<u.length;c++)if(!i.has(u[c])){i=!1;break e}i=!0}u=!i}if(u)return null;switch(i=t?l(t):window,e){case"focus":(gs(i)||i.contentEditable==="true")&&(vr=i,ml=t,ci=null);break;case"blur":ci=ml=vr=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":return pl=!1,Ns(n,r);case"selectionchange":if(mu)break;case"keydown":case"keyup":return Ns(n,r)}return null}},hu=De.extend({animationName:null,elapsedTime:null,pseudoElement:null}),vu=De.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gu=li.extend({relatedTarget:null});function oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}o(oo,"of");var yu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xu=li.extend({key:function(e){if(e.key){var t=yu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wu[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:fl,charCode:function(e){return e.type==="keypress"?oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eu=si.extend({dataTransfer:null}),Cu=li.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:fl}),ku=De.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),_u=si.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),bu={eventTypes:Ln,extractEvents:function(e,t,n,r){var i=Hr.get(e);if(!i)return null;switch(e){case"keypress":if(oo(n)===0)return null;case"keydown":case"keyup":e=xu;break;case"blur":case"focus":e=gu;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=si;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Eu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Cu;break;case ir:case Or:case Dr:e=hu;break;case Ir:e=ku;break;case"scroll":e=li;break;case"wheel":e=_u;break;case"copy":case"cut":case"paste":e=vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Ss;break;default:e=De}return t=e.getPooled(i,t,n,r),F(t),t}};if(E)throw Error(p(101));E=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),W();var Su=Dn;z=a,Y=Su,ae=l,K({SimpleEventPlugin:bu,EnterLeaveEventPlugin:cu,ChangeEventPlugin:su,SelectEventPlugin:pu,BeforeInputEventPlugin:Ja});var hl=[],gr=-1;function ze(e){0>gr||(e.current=hl[gr],hl[gr]=null,gr--)}o(ze,"H");function Qe(e,t){gr++,hl[gr]=e.current,e.current=t}o(Qe,"I");var sn={},ot={current:sn},ct={current:!1},An=sn;function yr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},u;for(u in n)i[u]=t[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}o(yr,"Cf");function dt(e){return e=e.childContextTypes,e!=null}o(dt,"L");function lo(){ze(ct),ze(ot)}o(lo,"Df");function Ms(e,t,n){if(ot.current!==sn)throw Error(p(168));Qe(ot,t),Qe(ct,n)}o(Ms,"Ef");function Ls(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(p(108,bt(t)||"Unknown",i));return $({},n,{},r)}o(Ls,"Ff");function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,An=ot.current,Qe(ot,e),Qe(ct,ct.current),!0}o(so,"Gf");function Ps(e,t,n){var r=e.stateNode;if(!r)throw Error(p(169));n?(e=Ls(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,ze(ct),ze(ot),Qe(ot,e)):ze(ct),Qe(ct,n)}o(Ps,"Hf");var Tu=v.unstable_runWithPriority,vl=v.unstable_scheduleCallback,Rs=v.unstable_cancelCallback,Os=v.unstable_requestPaint,gl=v.unstable_now,Nu=v.unstable_getCurrentPriorityLevel,ao=v.unstable_ImmediatePriority,Ds=v.unstable_UserBlockingPriority,Is=v.unstable_NormalPriority,As=v.unstable_LowPriority,Fs=v.unstable_IdlePriority,$s={},Mu=v.unstable_shouldYield,Lu=Os!==void 0?Os:function(){},Kt=null,uo=null,yl=!1,zs=gl(),xt=1e4>zs?gl:function(){return gl()-zs};function co(){switch(Nu()){case ao:return 99;case Ds:return 98;case Is:return 97;case As:return 96;case Fs:return 95;default:throw Error(p(332))}}o(co,"ag");function js(e){switch(e){case 99:return ao;case 98:return Ds;case 97:return Is;case 96:return As;case 95:return Fs;default:throw Error(p(332))}}o(js,"bg");function an(e,t){return e=js(e),Tu(e,t)}o(an,"cg");function Hs(e,t,n){return e=js(e),vl(e,t,n)}o(Hs,"dg");function Vs(e){return Kt===null?(Kt=[e],uo=vl(ao,Bs)):Kt.push(e),$s}o(Vs,"eg");function Ft(){if(uo!==null){var e=uo;uo=null,Rs(e)}Bs()}o(Ft,"gg");function Bs(){if(!yl&&Kt!==null){yl=!0;var e=0;try{var t=Kt;an(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),Kt=null}catch(n){throw Kt!==null&&(Kt=Kt.slice(e+1)),vl(ao,Ft),n}finally{yl=!1}}}o(Bs,"fg");function fo(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}o(fo,"hg");function Nt(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}o(Nt,"ig");var mo={current:null},po=null,wr=null,ho=null;function wl(){ho=wr=po=null}o(wl,"ng");function xl(e){var t=mo.current;ze(mo),e.type._context._currentValue=t}o(xl,"og");function Us(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}o(Us,"pg");function xr(e,t){po=e,ho=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(zt=!0),e.firstContext=null)}o(xr,"qg");function Et(e,t){if(ho!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(ho=e,t=1073741823),t={context:e,observedBits:t,next:null},wr===null){if(po===null)throw Error(p(308));wr=t,po.dependencies={expirationTime:0,firstContext:t,responders:null}}else wr=wr.next=t;return e._currentValue}o(Et,"sg");var un=!1;function El(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}o(El,"ug");function Cl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}o(Cl,"vg");function cn(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}o(cn,"wg");function dn(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}o(dn,"xg");function Ws(e,t){var n=e.alternate;n!==null&&Cl(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}o(Ws,"yg");function di(e,t,n,r){var i=e.updateQueue;un=!1;var u=i.baseQueue,c=i.shared.pending;if(c!==null){if(u!==null){var m=u.next;u.next=c.next,c.next=m}u=c,i.shared.pending=null,m=e.alternate,m!==null&&(m=m.updateQueue,m!==null&&(m.baseQueue=c))}if(u!==null){m=u.next;var C=i.baseState,k=0,X=null,ee=null,Se=null;if(m!==null){var Pe=m;do{if(c=Pe.expirationTime,c<r){var kt={expirationTime:Pe.expirationTime,suspenseConfig:Pe.suspenseConfig,tag:Pe.tag,payload:Pe.payload,callback:Pe.callback,next:null};Se===null?(ee=Se=kt,X=C):Se=Se.next=kt,c>k&&(k=c)}else{Se!==null&&(Se=Se.next={expirationTime:1073741823,suspenseConfig:Pe.suspenseConfig,tag:Pe.tag,payload:Pe.payload,callback:Pe.callback,next:null}),Ha(c,Pe.suspenseConfig);e:{var tt=e,x=Pe;switch(c=t,kt=n,x.tag){case 1:if(tt=x.payload,typeof tt=="function"){C=tt.call(kt,C,c);break e}C=tt;break e;case 3:tt.effectTag=tt.effectTag&-4097|64;case 0:if(tt=x.payload,c=typeof tt=="function"?tt.call(kt,C,c):tt,c==null)break e;C=$({},C,c);break e;case 2:un=!0}}Pe.callback!==null&&(e.effectTag|=32,c=i.effects,c===null?i.effects=[Pe]:c.push(Pe))}if(Pe=Pe.next,Pe===null||Pe===m){if(c=i.shared.pending,c===null)break;Pe=u.next=c.next,c.next=m,i.baseQueue=u=c,i.shared.pending=null}}while(1)}Se===null?X=C:Se.next=ee,i.baseState=X,i.baseQueue=Se,Vo(k),e.expirationTime=k,e.memoizedState=C}}o(di,"zg");function Qs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=i,i=n,typeof r!="function")throw Error(p(191,r));r.call(i)}}}o(Qs,"Cg");var fi=mt.ReactCurrentBatchConfig,Ks=new J.Component().refs;function vo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}o(vo,"Fg");var go={isMounted:function(e){return(e=e._reactInternalFiber)?Pt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ht(),i=fi.suspense;r=Vn(r,e,i),i=cn(r,i),i.payload=t,n!=null&&(i.callback=n),dn(e,i),hn(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ht(),i=fi.suspense;r=Vn(r,e,i),i=cn(r,i),i.tag=1,i.payload=t,n!=null&&(i.callback=n),dn(e,i),hn(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ht(),r=fi.suspense;n=Vn(n,e,r),r=cn(n,r),r.tag=2,t!=null&&(r.callback=t),dn(e,r),hn(e,n)}};function Zs(e,t,n,r,i,u,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,c):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(i,u):!0}o(Zs,"Kg");function Ys(e,t,n){var r=!1,i=sn,u=t.contextType;return typeof u=="object"&&u!==null?u=Et(u):(i=dt(t)?An:ot.current,r=t.contextTypes,u=(r=r!=null)?yr(e,i):sn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=go,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=u),t}o(Ys,"Lg");function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}o(qs,"Mg");function kl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ks,El(e);var u=t.contextType;typeof u=="object"&&u!==null?i.context=Et(u):(u=dt(t)?An:ot.current,i.context=yr(e,u)),di(e,n,i,r),i.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(vo(e,t,u,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&go.enqueueReplaceState(i,i.state,null),di(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.effectTag|=4)}o(kl,"Ng");var yo=Array.isArray;function mi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(p(309));var r=n.stateNode}if(!r)throw Error(p(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=o(function(u){var c=r.refs;c===Ks&&(c=r.refs={}),u===null?delete c[i]:c[i]=u},"b"),t._stringRef=i,t)}if(typeof e!="string")throw Error(p(284));if(!n._owner)throw Error(p(290,e))}return e}o(mi,"Pg");function wo(e,t){if(e.type!=="textarea")throw Error(p(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}o(wo,"Qg");function Xs(e){function t(x,w){if(e){var S=x.lastEffect;S!==null?(S.nextEffect=w,x.lastEffect=w):x.firstEffect=x.lastEffect=w,w.nextEffect=null,w.effectTag=8}}o(t,"b");function n(x,w){if(!e)return null;for(;w!==null;)t(x,w),w=w.sibling;return null}o(n,"c");function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}o(r,"d");function i(x,w){return x=Qn(x,w),x.index=0,x.sibling=null,x}o(i,"e");function u(x,w,S){return x.index=S,e?(S=x.alternate,S!==null?(S=S.index,S<w?(x.effectTag=2,w):S):(x.effectTag=2,w)):w}o(u,"f");function c(x){return e&&x.alternate===null&&(x.effectTag=2),x}o(c,"g");function m(x,w,S,H){return w===null||w.tag!==6?(w=is(S,x.mode,H),w.return=x,w):(w=i(w,S),w.return=x,w)}o(m,"h");function C(x,w,S,H){return w!==null&&w.elementType===S.type?(H=i(w,S.props),H.ref=mi(x,w,S),H.return=x,H):(H=Bo(S.type,S.key,S.props,null,x.mode,H),H.ref=mi(x,w,S),H.return=x,H)}o(C,"k");function k(x,w,S,H){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=os(S,x.mode,H),w.return=x,w):(w=i(w,S.children||[]),w.return=x,w)}o(k,"l");function X(x,w,S,H,Z){return w===null||w.tag!==7?(w=vn(S,x.mode,H,Z),w.return=x,w):(w=i(w,S),w.return=x,w)}o(X,"m");function ee(x,w,S){if(typeof w=="string"||typeof w=="number")return w=is(""+w,x.mode,S),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yn:return S=Bo(w.type,w.key,w.props,null,x.mode,S),S.ref=mi(x,null,w),S.return=x,S;case Xt:return w=os(w,x.mode,S),w.return=x,w}if(yo(w)||En(w))return w=vn(w,x.mode,S,null),w.return=x,w;wo(x,w)}return null}o(ee,"p");function Se(x,w,S,H){var Z=w!==null?w.key:null;if(typeof S=="string"||typeof S=="number")return Z!==null?null:m(x,w,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Yn:return S.key===Z?S.type===_t?X(x,w,S.props.children,H,Z):C(x,w,S,H):null;case Xt:return S.key===Z?k(x,w,S,H):null}if(yo(S)||En(S))return Z!==null?null:X(x,w,S,H,null);wo(x,S)}return null}o(Se,"x");function Pe(x,w,S,H,Z){if(typeof H=="string"||typeof H=="number")return x=x.get(S)||null,m(w,x,""+H,Z);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Yn:return x=x.get(H.key===null?S:H.key)||null,H.type===_t?X(w,x,H.props.children,Z,H.key):C(w,x,H,Z);case Xt:return x=x.get(H.key===null?S:H.key)||null,k(w,x,H,Z)}if(yo(H)||En(H))return x=x.get(S)||null,X(w,x,H,Z,null);wo(w,H)}return null}o(Pe,"z");function kt(x,w,S,H){for(var Z=null,re=null,pe=w,Le=w=0,He=null;pe!==null&&Le<S.length;Le++){pe.index>Le?(He=pe,pe=null):He=pe.sibling;var Ce=Se(x,pe,S[Le],H);if(Ce===null){pe===null&&(pe=He);break}e&&pe&&Ce.alternate===null&&t(x,pe),w=u(Ce,w,Le),re===null?Z=Ce:re.sibling=Ce,re=Ce,pe=He}if(Le===S.length)return n(x,pe),Z;if(pe===null){for(;Le<S.length;Le++)pe=ee(x,S[Le],H),pe!==null&&(w=u(pe,w,Le),re===null?Z=pe:re.sibling=pe,re=pe);return Z}for(pe=r(x,pe);Le<S.length;Le++)He=Pe(pe,x,Le,S[Le],H),He!==null&&(e&&He.alternate!==null&&pe.delete(He.key===null?Le:He.key),w=u(He,w,Le),re===null?Z=He:re.sibling=He,re=He);return e&&pe.forEach(function(gn){return t(x,gn)}),Z}o(kt,"ca");function tt(x,w,S,H){var Z=En(S);if(typeof Z!="function")throw Error(p(150));if(S=Z.call(S),S==null)throw Error(p(151));for(var re=Z=null,pe=w,Le=w=0,He=null,Ce=S.next();pe!==null&&!Ce.done;Le++,Ce=S.next()){pe.index>Le?(He=pe,pe=null):He=pe.sibling;var gn=Se(x,pe,Ce.value,H);if(gn===null){pe===null&&(pe=He);break}e&&pe&&gn.alternate===null&&t(x,pe),w=u(gn,w,Le),re===null?Z=gn:re.sibling=gn,re=gn,pe=He}if(Ce.done)return n(x,pe),Z;if(pe===null){for(;!Ce.done;Le++,Ce=S.next())Ce=ee(x,Ce.value,H),Ce!==null&&(w=u(Ce,w,Le),re===null?Z=Ce:re.sibling=Ce,re=Ce);return Z}for(pe=r(x,pe);!Ce.done;Le++,Ce=S.next())Ce=Pe(pe,x,Le,Ce.value,H),Ce!==null&&(e&&Ce.alternate!==null&&pe.delete(Ce.key===null?Le:Ce.key),w=u(Ce,w,Le),re===null?Z=Ce:re.sibling=Ce,re=Ce);return e&&pe.forEach(function(ic){return t(x,ic)}),Z}return o(tt,"D"),function(x,w,S,H){var Z=typeof S=="object"&&S!==null&&S.type===_t&&S.key===null;Z&&(S=S.props.children);var re=typeof S=="object"&&S!==null;if(re)switch(S.$$typeof){case Yn:e:{for(re=S.key,Z=w;Z!==null;){if(Z.key===re){switch(Z.tag){case 7:if(S.type===_t){n(x,Z.sibling),w=i(Z,S.props.children),w.return=x,x=w;break e}break;default:if(Z.elementType===S.type){n(x,Z.sibling),w=i(Z,S.props),w.ref=mi(x,Z,S),w.return=x,x=w;break e}}n(x,Z);break}else t(x,Z);Z=Z.sibling}S.type===_t?(w=vn(S.props.children,x.mode,H,S.key),w.return=x,x=w):(H=Bo(S.type,S.key,S.props,null,x.mode,H),H.ref=mi(x,w,S),H.return=x,x=H)}return c(x);case Xt:e:{for(Z=S.key;w!==null;){if(w.key===Z)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(x,w.sibling),w=i(w,S.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else t(x,w);w=w.sibling}w=os(S,x.mode,H),w.return=x,x=w}return c(x)}if(typeof S=="string"||typeof S=="number")return S=""+S,w!==null&&w.tag===6?(n(x,w.sibling),w=i(w,S),w.return=x,x=w):(n(x,w),w=is(S,x.mode,H),w.return=x,x=w),c(x);if(yo(S))return kt(x,w,S,H);if(En(S))return tt(x,w,S,H);if(re&&wo(x,S),typeof S=="undefined"&&!Z)switch(x.tag){case 1:case 0:throw x=x.type,Error(p(152,x.displayName||x.name||"Component"))}return n(x,w)}}o(Xs,"Rg");var Er=Xs(!0),_l=Xs(!1),pi={},$t={current:pi},hi={current:pi},vi={current:pi};function Fn(e){if(e===pi)throw Error(p(174));return e}o(Fn,"ch");function bl(e,t){switch(Qe(vi,t),Qe(hi,e),Qe($t,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:er(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=er(t,e)}ze($t),Qe($t,t)}o(bl,"dh");function Cr(){ze($t),ze(hi),ze(vi)}o(Cr,"eh");function Gs(e){Fn(vi.current);var t=Fn($t.current),n=er(t,e.type);t!==n&&(Qe(hi,e),Qe($t,n))}o(Gs,"fh");function Sl(e){hi.current===e&&(ze($t),ze(hi))}o(Sl,"gh");var Be={current:0};function xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===qr||n.data===Xr))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.effectTag&64)!=0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}o(xo,"hh");function Tl(e,t){return{responder:e,props:t}}o(Tl,"ih");var Eo=mt.ReactCurrentDispatcher,Ct=mt.ReactCurrentBatchConfig,fn=0,Ke=null,lt=null,st=null,Co=!1;function ht(){throw Error(p(321))}o(ht,"Q");function Nl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!In(e[n],t[n]))return!1;return!0}o(Nl,"nh");function Ml(e,t,n,r,i,u){if(fn=u,Ke=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Eo.current=e===null||e.memoizedState===null?Pu:Ru,e=n(r,i),t.expirationTime===fn){u=0;do{if(t.expirationTime=0,!(25>u))throw Error(p(301));u+=1,st=lt=null,t.updateQueue=null,Eo.current=Ou,e=n(r,i)}while(t.expirationTime===fn)}if(Eo.current=To,t=lt!==null&&lt.next!==null,fn=0,st=lt=Ke=null,Co=!1,t)throw Error(p(300));return e}o(Ml,"oh");function kr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ke.memoizedState=st=e:st=st.next=e,st}o(kr,"th");function _r(){if(lt===null){var e=Ke.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var t=st===null?Ke.memoizedState:st.next;if(t!==null)st=t,lt=e;else{if(e===null)throw Error(p(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},st===null?Ke.memoizedState=st=e:st=st.next=e}return st}o(_r,"uh");function $n(e,t){return typeof t=="function"?t(e):t}o($n,"vh");function ko(e){var t=_r(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=lt,i=r.baseQueue,u=n.pending;if(u!==null){if(i!==null){var c=i.next;i.next=u.next,u.next=c}r.baseQueue=i=u,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var m=c=u=null,C=i;do{var k=C.expirationTime;if(k<fn){var X={expirationTime:C.expirationTime,suspenseConfig:C.suspenseConfig,action:C.action,eagerReducer:C.eagerReducer,eagerState:C.eagerState,next:null};m===null?(c=m=X,u=r):m=m.next=X,k>Ke.expirationTime&&(Ke.expirationTime=k,Vo(k))}else m!==null&&(m=m.next={expirationTime:1073741823,suspenseConfig:C.suspenseConfig,action:C.action,eagerReducer:C.eagerReducer,eagerState:C.eagerState,next:null}),Ha(k,C.suspenseConfig),r=C.eagerReducer===e?C.eagerState:e(r,C.action);C=C.next}while(C!==null&&C!==i);m===null?u=r:m.next=c,In(r,t.memoizedState)||(zt=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=m,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}o(ko,"wh");function _o(e){var t=_r(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,u=t.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do u=e(u,c.action),c=c.next;while(c!==i);In(u,t.memoizedState)||(zt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}o(_o,"xh");function Ll(e){var t=kr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},e=e.dispatch=la.bind(null,Ke,e),[t.memoizedState,e]}o(Ll,"yh");function Pl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ke.updateQueue,t===null?(t={lastEffect:null},Ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}o(Pl,"Ah");function Js(){return _r().memoizedState}o(Js,"Bh");function Rl(e,t,n,r){var i=kr();Ke.effectTag|=e,i.memoizedState=Pl(1|t,n,void 0,r===void 0?null:r)}o(Rl,"Ch");function Ol(e,t,n,r){var i=_r();r=r===void 0?null:r;var u=void 0;if(lt!==null){var c=lt.memoizedState;if(u=c.destroy,r!==null&&Nl(r,c.deps)){Pl(t,n,u,r);return}}Ke.effectTag|=e,i.memoizedState=Pl(1|t,n,u,r)}o(Ol,"Dh");function ea(e,t){return Rl(516,4,e,t)}o(ea,"Eh");function bo(e,t){return Ol(516,4,e,t)}o(bo,"Fh");function ta(e,t){return Ol(4,2,e,t)}o(ta,"Gh");function na(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}o(na,"Hh");function ra(e,t,n){return n=n!=null?n.concat([e]):null,Ol(4,2,na.bind(null,t,e),n)}o(ra,"Ih");function Dl(){}o(Dl,"Jh");function ia(e,t){return kr().memoizedState=[e,t===void 0?null:t],e}o(ia,"Kh");function So(e,t){var n=_r();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}o(So,"Lh");function oa(e,t){var n=_r();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}o(oa,"Mh");function Il(e,t,n){var r=co();an(98>r?98:r,function(){e(!0)}),an(97<r?97:r,function(){var i=Ct.suspense;Ct.suspense=t===void 0?null:t;try{e(!1),n()}finally{Ct.suspense=i}})}o(Il,"Nh");function la(e,t,n){var r=Ht(),i=fi.suspense;r=Vn(r,e,i),i={expirationTime:r,suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var u=t.pending;if(u===null?i.next=i:(i.next=u.next,u.next=i),t.pending=i,u=e.alternate,e===Ke||u!==null&&u===Ke)Co=!0,i.expirationTime=fn,Ke.expirationTime=fn;else{if(e.expirationTime===0&&(u===null||u.expirationTime===0)&&(u=t.lastRenderedReducer,u!==null))try{var c=t.lastRenderedState,m=u(c,n);if(i.eagerReducer=u,i.eagerState=m,In(m,c))return}catch(C){}finally{}hn(e,r)}}o(la,"zh");var To={readContext:Et,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useResponder:ht,useDeferredValue:ht,useTransition:ht},Pu={readContext:Et,useCallback:ia,useContext:Et,useEffect:ea,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4,2,na.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rl(4,2,e,t)},useMemo:function(e,t){var n=kr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=la.bind(null,Ke,e),[r.memoizedState,e]},useRef:function(e){var t=kr();return e={current:e},t.memoizedState=e},useState:Ll,useDebugValue:Dl,useResponder:Tl,useDeferredValue:function(e,t){var n=Ll(e),r=n[0],i=n[1];return ea(function(){var u=Ct.suspense;Ct.suspense=t===void 0?null:t;try{i(e)}finally{Ct.suspense=u}},[e,t]),r},useTransition:function(e){var t=Ll(!1),n=t[0];return t=t[1],[ia(Il.bind(null,t,e),[t,e]),n]}},Ru={readContext:Et,useCallback:So,useContext:Et,useEffect:bo,useImperativeHandle:ra,useLayoutEffect:ta,useMemo:oa,useReducer:ko,useRef:Js,useState:function(){return ko($n)},useDebugValue:Dl,useResponder:Tl,useDeferredValue:function(e,t){var n=ko($n),r=n[0],i=n[1];return bo(function(){var u=Ct.suspense;Ct.suspense=t===void 0?null:t;try{i(e)}finally{Ct.suspense=u}},[e,t]),r},useTransition:function(e){var t=ko($n),n=t[0];return t=t[1],[So(Il.bind(null,t,e),[t,e]),n]}},Ou={readContext:Et,useCallback:So,useContext:Et,useEffect:bo,useImperativeHandle:ra,useLayoutEffect:ta,useMemo:oa,useReducer:_o,useRef:Js,useState:function(){return _o($n)},useDebugValue:Dl,useResponder:Tl,useDeferredValue:function(e,t){var n=_o($n),r=n[0],i=n[1];return bo(function(){var u=Ct.suspense;Ct.suspense=t===void 0?null:t;try{i(e)}finally{Ct.suspense=u}},[e,t]),r},useTransition:function(e){var t=_o($n),n=t[0];return t=t[1],[So(Il.bind(null,t,e),[t,e]),n]}},Zt=null,mn=null,zn=!1;function sa(e,t){var n=Vt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}o(sa,"Rh");function aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}o(aa,"Th");function Al(e){if(zn){var t=mn;if(t){var n=t;if(!aa(e,t)){if(t=on(n.nextSibling),!t||!aa(e,t)){e.effectTag=e.effectTag&-1025|2,zn=!1,Zt=e;return}sa(Zt,n)}Zt=e,mn=on(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,zn=!1,Zt=e}}o(Al,"Uh");function ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}o(ua,"Vh");function No(e){if(e!==Zt)return!1;if(!zn)return ua(e),zn=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!ei(t,e.memoizedProps))for(t=mn;t;)sa(e,t),t=on(t.nextSibling);if(ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===to){if(t===0){mn=on(e.nextSibling);break e}t--}else n!==ul&&n!==Xr&&n!==qr||t++}e=e.nextSibling}mn=null}}else mn=Zt?on(e.stateNode.nextSibling):null;return!0}o(No,"Wh");function Fl(){mn=Zt=null,zn=!1}o(Fl,"Xh");var Du=mt.ReactCurrentOwner,zt=!1;function vt(e,t,n,r){t.child=e===null?_l(t,null,n,r):Er(t,e.child,n,r)}o(vt,"R");function ca(e,t,n,r,i){n=n.render;var u=t.ref;return xr(t,i),r=Ml(e,t,n,r,u,i),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Yt(e,t,i)):(t.effectTag|=1,vt(e,t,r,i),t.child)}o(ca,"Zh");function da(e,t,n,r,i,u){if(e===null){var c=n.type;return typeof c=="function"&&!rs(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=c,fa(e,t,c,r,i,u)):(e=Bo(n.type,null,r,null,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}return c=e.child,i<u&&(i=c.memoizedProps,n=n.compare,n=n!==null?n:ui,n(i,r)&&e.ref===t.ref)?Yt(e,t,u):(t.effectTag|=1,e=Qn(c,r),e.ref=t.ref,e.return=t,t.child=e)}o(da,"ai");function fa(e,t,n,r,i,u){return e!==null&&ui(e.memoizedProps,r)&&e.ref===t.ref&&(zt=!1,i<u)?(t.expirationTime=e.expirationTime,Yt(e,t,u)):$l(e,t,n,r,u)}o(fa,"ci");function ma(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}o(ma,"ei");function $l(e,t,n,r,i){var u=dt(n)?An:ot.current;return u=yr(t,u),xr(t,i),n=Ml(e,t,n,r,u,i),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Yt(e,t,i)):(t.effectTag|=1,vt(e,t,n,i),t.child)}o($l,"di");function pa(e,t,n,r,i){if(dt(n)){var u=!0;so(t)}else u=!1;if(xr(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Ys(t,n,r),kl(t,n,r,i),r=!0;else if(e===null){var c=t.stateNode,m=t.memoizedProps;c.props=m;var C=c.context,k=n.contextType;typeof k=="object"&&k!==null?k=Et(k):(k=dt(n)?An:ot.current,k=yr(t,k));var X=n.getDerivedStateFromProps,ee=typeof X=="function"||typeof c.getSnapshotBeforeUpdate=="function";ee||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==r||C!==k)&&qs(t,c,r,k),un=!1;var Se=t.memoizedState;c.state=Se,di(t,r,c,i),C=t.memoizedState,m!==r||Se!==C||ct.current||un?(typeof X=="function"&&(vo(t,n,X,r),C=t.memoizedState),(m=un||Zs(t,n,m,r,Se,C,k))?(ee||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.effectTag|=4)):(typeof c.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=C),c.props=r,c.state=C,c.context=k,r=m):(typeof c.componentDidMount=="function"&&(t.effectTag|=4),r=!1)}else c=t.stateNode,Cl(e,t),m=t.memoizedProps,c.props=t.type===t.elementType?m:Nt(t.type,m),C=c.context,k=n.contextType,typeof k=="object"&&k!==null?k=Et(k):(k=dt(n)?An:ot.current,k=yr(t,k)),X=n.getDerivedStateFromProps,(ee=typeof X=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==r||C!==k)&&qs(t,c,r,k),un=!1,C=t.memoizedState,c.state=C,di(t,r,c,i),Se=t.memoizedState,m!==r||C!==Se||ct.current||un?(typeof X=="function"&&(vo(t,n,X,r),Se=t.memoizedState),(X=un||Zs(t,n,m,r,C,Se,k))?(ee||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,Se,k),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,Se,k)),typeof c.componentDidUpdate=="function"&&(t.effectTag|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.effectTag|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=Se),c.props=r,c.state=Se,c.context=k,r=X):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.effectTag|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.effectTag|=256),r=!1);return zl(e,t,n,r,u,i)}o(pa,"fi");function zl(e,t,n,r,i,u){ma(e,t);var c=(t.effectTag&64)!=0;if(!r&&!c)return i&&Ps(t,n,!1),Yt(e,t,u);r=t.stateNode,Du.current=t;var m=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.effectTag|=1,e!==null&&c?(t.child=Er(t,e.child,null,u),t.child=Er(t,null,m,u)):vt(e,t,m,u),t.memoizedState=r.state,i&&Ps(t,n,!0),t.child}o(zl,"gi");function ha(e){var t=e.stateNode;t.pendingContext?Ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ms(e,t.context,!1),bl(e,t.containerInfo)}o(ha,"hi");var jl={dehydrated:null,retryTime:0};function va(e,t,n){var r=t.mode,i=t.pendingProps,u=Be.current,c=!1,m;if((m=(t.effectTag&64)!=0)||(m=(u&2)!=0&&(e===null||e.memoizedState!==null)),m?(c=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(u|=1),Qe(Be,u&1),e===null){if(i.fallback!==void 0&&Al(t),c){if(c=i.fallback,i=vn(null,r,0,null),i.return=t,(t.mode&2)==0)for(e=t.memoizedState!==null?t.child.child:t.child,i.child=e;e!==null;)e.return=i,e=e.sibling;return n=vn(c,r,n,null),n.return=t,i.sibling=n,t.memoizedState=jl,t.child=i,n}return r=i.children,t.memoizedState=null,t.child=_l(t,null,r,n)}if(e.memoizedState!==null){if(e=e.child,r=e.sibling,c){if(i=i.fallback,n=Qn(e,e.pendingProps),n.return=t,(t.mode&2)==0&&(c=t.memoizedState!==null?t.child.child:t.child,c!==e.child))for(n.child=c;c!==null;)c.return=n,c=c.sibling;return r=Qn(r,i),r.return=t,n.sibling=r,n.childExpirationTime=0,t.memoizedState=jl,t.child=n,r}return n=Er(t,e.child,i.children,n),t.memoizedState=null,t.child=n}if(e=e.child,c){if(c=i.fallback,i=vn(null,r,0,null),i.return=t,i.child=e,e!==null&&(e.return=i),(t.mode&2)==0)for(e=t.memoizedState!==null?t.child.child:t.child,i.child=e;e!==null;)e.return=i,e=e.sibling;return n=vn(c,r,n,null),n.return=t,i.sibling=n,n.effectTag|=2,i.childExpirationTime=0,t.memoizedState=jl,t.child=i,n}return t.memoizedState=null,t.child=Er(t,e,i.children,n)}o(va,"ji");function ga(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),Us(e.return,t)}o(ga,"ki");function Hl(e,t,n,r,i,u){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:u}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=n,c.tailExpiration=0,c.tailMode=i,c.lastEffect=u)}o(Hl,"li");function ya(e,t,n){var r=t.pendingProps,i=r.revealOrder,u=r.tail;if(vt(e,t,r.children,n),r=Be.current,(r&2)!=0)r=r&1|2,t.effectTag|=64;else{if(e!==null&&(e.effectTag&64)!=0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ga(e,n);else if(e.tag===19)ga(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Qe(Be,r),(t.mode&2)==0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&xo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hl(t,!1,i,n,u,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hl(t,!0,n,null,u,t.lastEffect);break;case"together":Hl(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}o(ya,"mi");function Yt(e,t,n){e!==null&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(r!==0&&Vo(r),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,n=Qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}o(Yt,"$h");var wa,Vl,xa,Ea;wa=o(function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},"ni"),Vl=o(function(){},"oi"),xa=o(function(e,t,n,r,i){var u=e.memoizedProps;if(u!==r){var c=t.stateNode;switch(Fn($t.current),e=null,n){case"input":u=Mr(c,u),r=Mr(c,r),e=[];break;case"option":u=Jn(c,u),r=Jn(c,r),e=[];break;case"select":u=$({},u,{value:void 0}),r=$({},r,{value:void 0}),e=[];break;case"textarea":u=Lr(c,u),r=Lr(c,r),e=[];break;default:typeof u.onClick!="function"&&typeof r.onClick=="function"&&(c.onclick=mr)}Qr(n,r);var m,C;n=null;for(m in u)if(!r.hasOwnProperty(m)&&u.hasOwnProperty(m)&&u[m]!=null)if(m==="style")for(C in c=u[m],c)c.hasOwnProperty(C)&&(n||(n={}),n[C]="");else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(O.hasOwnProperty(m)?e||(e=[]):(e=e||[]).push(m,null));for(m in r){var k=r[m];if(c=u!=null?u[m]:void 0,r.hasOwnProperty(m)&&k!==c&&(k!=null||c!=null))if(m==="style")if(c){for(C in c)!c.hasOwnProperty(C)||k&&k.hasOwnProperty(C)||(n||(n={}),n[C]="");for(C in k)k.hasOwnProperty(C)&&c[C]!==k[C]&&(n||(n={}),n[C]=k[C])}else n||(e||(e=[]),e.push(m,n)),n=k;else m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,c=c?c.__html:void 0,k!=null&&c!==k&&(e=e||[]).push(m,k)):m==="children"?c===k||typeof k!="string"&&typeof k!="number"||(e=e||[]).push(m,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(O.hasOwnProperty(m)?(k!=null&&It(i,m),e||c===k||(e=[])):(e=e||[]).push(m,k))}n&&(e=e||[]).push("style",n),i=e,(t.updateQueue=i)&&(t.effectTag|=4)}},"pi"),Ea=o(function(e,t,n,r){n!==r&&(t.effectTag|=4)},"qi");function Mo(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}o(Mo,"ri");function Iu(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return dt(t.type)&&lo(),null;case 3:return Cr(),ze(ct),ze(ot),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!No(t)||(t.effectTag|=4),Vl(t),null;case 5:Sl(t),n=Fn(vi.current);var i=t.type;if(e!==null&&t.stateNode!=null)xa(e,t,i,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(t.stateNode===null)throw Error(p(166));return null}if(e=Fn($t.current),No(t)){r=t.stateNode,i=t.type;var u=t.memoizedProps;switch(r[At]=t,r[pr]=u,i){case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(e=0;e<en.length;e++)$e(en[e],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"form":$e("reset",r),$e("submit",r);break;case"details":$e("toggle",r);break;case"input":qo(r,u),$e("invalid",r),It(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!u.multiple},$e("invalid",r),It(n,"onChange");break;case"textarea":Go(r,u),$e("invalid",r),It(n,"onChange")}Qr(i,u),e=null;for(var c in u)if(u.hasOwnProperty(c)){var m=u[c];c==="children"?typeof m=="string"?r.textContent!==m&&(e=["children",m]):typeof m=="number"&&r.textContent!==""+m&&(e=["children",""+m]):O.hasOwnProperty(c)&&m!=null&&It(n,c)}switch(i){case"input":Gn(r),Li(r,u,!0);break;case"textarea":Gn(r),Jo(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=mr)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(c=n.nodeType===9?n:n.ownerDocument,e===Xi&&(e=Rr(i)),e===Xi?i==="script"?(e=c.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(i,{is:r.is}):(e=c.createElement(i),i==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,i),e[At]=t,e[pr]=r,wa(e,t,!1,!1),t.stateNode=e,c=qi(i,r),i){case"iframe":case"object":case"embed":$e("load",e),m=r;break;case"video":case"audio":for(m=0;m<en.length;m++)$e(en[m],e);m=r;break;case"source":$e("error",e),m=r;break;case"img":case"image":case"link":$e("error",e),$e("load",e),m=r;break;case"form":$e("reset",e),$e("submit",e),m=r;break;case"details":$e("toggle",e),m=r;break;case"input":qo(e,r),m=Mr(e,r),$e("invalid",e),It(n,"onChange");break;case"option":m=Jn(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},m=$({},r,{value:void 0}),$e("invalid",e),It(n,"onChange");break;case"textarea":Go(e,r),m=Lr(e,r),$e("invalid",e),It(n,"onChange");break;default:m=r}Qr(i,m);var C=m;for(u in C)if(C.hasOwnProperty(u)){var k=C[u];u==="style"?Zi(e,k):u==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Di(e,k)):u==="children"?typeof k=="string"?(i!=="textarea"||k!=="")&&Jt(e,k):typeof k=="number"&&Jt(e,""+k):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(O.hasOwnProperty(u)?k!=null&&It(n,u):k!=null&&_i(e,u,k,c))}switch(i){case"input":Gn(e),Li(e,r,!1);break;case"textarea":Gn(e),Jo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?Gt(e,!!r.multiple,n,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof m.onClick=="function"&&(e.onclick=mr)}no(i,r)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)Ea(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(p(166));n=Fn(vi.current),Fn($t.current),No(t)?(n=t.stateNode,r=t.memoizedProps,n[At]=t,n.nodeValue!==r&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[At]=t,t.stateNode=n)}return null;case 13:return ze(Be),r=t.memoizedState,(t.effectTag&64)!=0?(t.expirationTime=n,t):(n=r!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&No(t):(i=e.memoizedState,r=i!==null,n||i===null||(i=e.child.sibling,i!==null&&(u=t.firstEffect,u!==null?(t.firstEffect=i,i.nextEffect=u):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8))),n&&!r&&(t.mode&2)!=0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Be.current&1)!=0?qe===jn&&(qe=Ro):((qe===jn||qe===Ro)&&(qe=Oo),yi!==0&&gt!==null&&(Kn(gt,ft),Ka(gt,yi)))),(n||r)&&(t.effectTag|=4),null);case 4:return Cr(),Vl(t),null;case 10:return xl(t),null;case 17:return dt(t.type)&&lo(),null;case 19:if(ze(Be),r=t.memoizedState,r===null)return null;if(i=(t.effectTag&64)!=0,u=r.rendering,u===null){if(i)Mo(r,!1);else if(qe!==jn||e!==null&&(e.effectTag&64)!=0)for(u=t.child;u!==null;){if(e=xo(u),e!==null){for(t.effectTag|=64,Mo(r,!1),i=e.updateQueue,i!==null&&(t.updateQueue=i,t.effectTag|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;r!==null;)i=r,u=n,i.effectTag&=2,i.nextEffect=null,i.firstEffect=null,i.lastEffect=null,e=i.alternate,e===null?(i.childExpirationTime=0,i.expirationTime=u,i.child=null,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null):(i.childExpirationTime=e.childExpirationTime,i.expirationTime=e.expirationTime,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,u=e.dependencies,i.dependencies=u===null?null:{expirationTime:u.expirationTime,firstContext:u.firstContext,responders:u.responders}),r=r.sibling;return Qe(Be,Be.current&1|2),t.child}u=u.sibling}}else{if(!i)if(e=xo(u),e!==null){if(t.effectTag|=64,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),Mo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*xt()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,i=!0,Mo(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(u.sibling=t.child,t.child=u):(n=r.last,n!==null?n.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=xt()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=xt(),n.sibling=null,t=Be.current,Qe(Be,i?t&1|2:t&1),n):null}throw Error(p(156,t.tag))}o(Iu,"si");function Au(e){switch(e.tag){case 1:dt(e.type)&&lo();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(Cr(),ze(ct),ze(ot),t=e.effectTag,(t&64)!=0)throw Error(p(285));return e.effectTag=t&-4097|64,e;case 5:return Sl(e),null;case 13:return ze(Be),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return ze(Be),null;case 4:return Cr(),null;case 10:return xl(e),null;default:return null}}o(Au,"zi");function Bl(e,t){return{value:e,source:t,stack:Nr(t)}}o(Bl,"Ai");var Fu=typeof WeakSet=="function"?WeakSet:Set;function Ul(e,t){var n=t.source,r=t.stack;r===null&&n!==null&&(r=Nr(n)),n!==null&&bt(n.type),t=t.value,e!==null&&e.tag===1&&bt(e.type);try{console.error(t)}catch(i){setTimeout(function(){throw i})}}o(Ul,"Ci");function $u(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){Wn(e,n)}}o($u,"Di");function Ca(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Wn(e,n)}else t.current=null}o(Ca,"Fi");function zu(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Nt(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(p(163))}o(zu,"Gi");function ka(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==t)}}o(ka,"Hi");function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}o(_a,"Ii");function ju(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:_a(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Nt(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&Qs(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Qs(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&no(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Bi(n))));return;case 19:case 17:case 20:case 21:return}throw Error(p(163))}o(ju,"Ji");function ba(e,t,n){switch(typeof ns=="function"&&ns(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e.next;an(97<n?97:n,function(){var i=r;do{var u=i.destroy;if(u!==void 0){var c=t;try{u()}catch(m){Wn(c,m)}}i=i.next}while(i!==r)})}break;case 1:Ca(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&$u(t,n);break;case 5:Ca(t);break;case 4:Ma(e,t,n)}}o(ba,"Ki");function Sa(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&Sa(t)}o(Sa,"Ni");function Ta(e){return e.tag===5||e.tag===3||e.tag===4}o(Ta,"Oi");function Na(e){e:{for(var t=e.return;t!==null;){if(Ta(t)){var n=t;break e}t=t.return}throw Error(p(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(p(161))}n.effectTag&16&&(Jt(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Ta(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?Wl(e,n,t):Ql(e,n,t)}o(Na,"Pi");function Wl(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mr));else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}o(Wl,"Qi");function Ql(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}o(Ql,"Ri");function Ma(e,t,n){for(var r=t,i=!1,u,c;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(p(160));switch(u=i.stateNode,i.tag){case 5:c=!1;break e;case 3:u=u.containerInfo,c=!0;break e;case 4:u=u.containerInfo,c=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var m=e,C=r,k=n,X=C;;)if(ba(m,X,k),X.child!==null&&X.tag!==4)X.child.return=X,X=X.child;else{if(X===C)break e;for(;X.sibling===null;){if(X.return===null||X.return===C)break e;X=X.return}X.sibling.return=X.return,X=X.sibling}c?(m=u,C=r.stateNode,m.nodeType===8?m.parentNode.removeChild(C):m.removeChild(C)):u.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){u=r.stateNode.containerInfo,c=!0,r.child.return=r,r=r.child;continue}}else if(ba(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}o(Ma,"Mi");function Kl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:ka(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,i=e!==null?e.memoizedProps:r;e=t.type;var u=t.updateQueue;if(t.updateQueue=null,u!==null){for(n[pr]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Xo(n,r),qi(e,i),t=qi(e,r),i=0;i<u.length;i+=2){var c=u[i],m=u[i+1];c==="style"?Zi(n,m):c==="dangerouslySetInnerHTML"?Di(n,m):c==="children"?Jt(n,m):_i(n,c,m,t)}switch(e){case"input":Mi(n,r);break;case"textarea":Oi(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,e=r.value,e!=null?Gt(n,!!r.multiple,e,!1):t!==!!r.multiple&&(r.defaultValue!=null?Gt(n,!!r.multiple,r.defaultValue,!0):Gt(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(p(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,Bi(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?r=!1:(r=!0,n=t.child,ql=xt()),n!==null)e:for(e=n;;){if(e.tag===5)u=e.stateNode,r?(u=u.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(u=e.stateNode,i=e.memoizedProps.style,i=i!=null&&i.hasOwnProperty("display")?i.display:null,u.style.display=Ki("display",i));else if(e.tag===6)e.stateNode.nodeValue=r?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){u=e.child.sibling,u.return=e,e=u;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}La(t);return;case 19:La(t);return;case 17:return}throw Error(p(163))}o(Kl,"Si");function La(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fu),t.forEach(function(r){var i=qu.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}o(La,"Ui");var Hu=typeof WeakMap=="function"?WeakMap:Map;function Pa(e,t,n){n=cn(n,null),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fo||(Fo=!0,Xl=r),Ul(e,t)},n}o(Pa,"Xi");function Ra(e,t,n){n=cn(n,null),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Ul(e,t),r(i)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this),Ul(e,t));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}o(Ra,"$i");var Vu=Math.ceil,Lo=mt.ReactCurrentDispatcher,Oa=mt.ReactCurrentOwner,Ye=0,Zl=8,Mt=16,jt=32,jn=0,Po=1,Da=2,Ro=3,Oo=4,Yl=5,ye=Ye,gt=null,Ee=null,ft=0,qe=jn,Do=null,qt=1073741823,gi=1073741823,Io=null,yi=0,Ao=!1,ql=0,Ia=500,ue=null,Fo=!1,Xl=null,pn=null,$o=!1,wi=null,xi=90,Hn=null,Ei=0,Gl=null,zo=0;function Ht(){return(ye&(Mt|jt))!==Ye?1073741821-(xt()/10|0):zo!==0?zo:zo=1073741821-(xt()/10|0)}o(Ht,"Gg");function Vn(e,t,n){if(t=t.mode,(t&2)==0)return 1073741823;var r=co();if((t&4)==0)return r===99?1073741823:1073741822;if((ye&Mt)!==Ye)return ft;if(n!==null)e=fo(e,n.timeoutMs|0||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=fo(e,150,100);break;case 97:case 96:e=fo(e,5e3,250);break;case 95:e=2;break;default:throw Error(p(326))}return gt!==null&&e===ft&&--e,e}o(Vn,"Hg");function hn(e,t){if(50<Ei)throw Ei=0,Gl=null,Error(p(185));if(e=jo(e,t),e!==null){var n=co();t===1073741823?(ye&Zl)!==Ye&&(ye&(Mt|jt))===Ye?Jl(e):(yt(e),ye===Ye&&Ft()):yt(e),(ye&4)===Ye||n!==98&&n!==99||(Hn===null?Hn=new Map([[e,t]]):(n=Hn.get(e),(n===void 0||n>t)&&Hn.set(e,t)))}}o(hn,"Ig");function jo(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(r===null&&e.tag===3)i=e.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),r.return===null&&r.tag===3){i=r.stateNode;break}r=r.return}return i!==null&&(gt===i&&(Vo(t),qe===Oo&&Kn(i,ft)),Ka(i,t)),i}o(jo,"xj");function Ho(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!Qa(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}o(Ho,"zj");function yt(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Vs(Jl.bind(null,e));else{var t=Ho(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ht();if(t===1073741823?r=99:t===1||t===2?r=95:(r=10*(1073741821-t)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==$s&&Rs(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=t===1073741823?Vs(Jl.bind(null,e)):Hs(r,Aa.bind(null,e),{timeout:10*(1073741821-t)-xt()}),e.callbackNode=t}}}o(yt,"Z");function Aa(e,t){if(zo=0,t)return t=Ht(),ls(e,t),yt(e),null;var n=Ho(e);if(n!==0){if(t=e.callbackNode,(ye&(Mt|jt))!==Ye)throw Error(p(327));if(br(),e===gt&&n===ft||Bn(e,n),Ee!==null){var r=ye;ye|=Mt;var i=ja();do try{Wu();break}catch(m){za(e,m)}while(1);if(wl(),ye=r,Lo.current=i,qe===Po)throw t=Do,Bn(e,n),Kn(e,n),yt(e),t;if(Ee===null)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=qe,gt=null,r){case jn:case Po:throw Error(p(345));case Da:ls(e,2<n?2:n);break;case Ro:if(Kn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=es(i)),qt===1073741823&&(i=ql+Ia-xt(),10<i)){if(Ao){var u=e.lastPingedTime;if(u===0||u>=n){e.lastPingedTime=n,Bn(e,n);break}}if(u=Ho(e),u!==0&&u!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=ti(Un.bind(null,e),i);break}Un(e);break;case Oo:if(Kn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=es(i)),Ao&&(i=e.lastPingedTime,i===0||i>=n)){e.lastPingedTime=n,Bn(e,n);break}if(i=Ho(e),i!==0&&i!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}if(gi!==1073741823?r=10*(1073741821-gi)-xt():qt===1073741823?r=0:(r=10*(1073741821-qt)-5e3,i=xt(),n=10*(1073741821-n)-i,r=i-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vu(r/1960))-r,n<r&&(r=n)),10<r){e.timeoutHandle=ti(Un.bind(null,e),r);break}Un(e);break;case Yl:if(qt!==1073741823&&Io!==null){u=qt;var c=Io;if(r=c.busyMinDurationMs|0,0>=r?r=0:(i=c.busyDelayMs|0,u=xt()-(10*(1073741821-u)-(c.timeoutMs|0||5e3)),r=u<=i?0:i+r-u),10<r){Kn(e,n),e.timeoutHandle=ti(Un.bind(null,e),r);break}}Un(e);break;default:throw Error(p(329))}if(yt(e),e.callbackNode===t)return Aa.bind(null,e)}}return null}o(Aa,"Bj");function Jl(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(ye&(Mt|jt))!==Ye)throw Error(p(327));if(br(),e===gt&&t===ft||Bn(e,t),Ee!==null){var n=ye;ye|=Mt;var r=ja();do try{Uu();break}catch(i){za(e,i)}while(1);if(wl(),ye=n,Lo.current=r,qe===Po)throw n=Do,Bn(e,t),Kn(e,t),yt(e),n;if(Ee!==null)throw Error(p(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,gt=null,Un(e),yt(e)}return null}o(Jl,"yj");function Bu(){if(Hn!==null){var e=Hn;Hn=null,e.forEach(function(t,n){ls(n,t),yt(n)}),Ft()}}o(Bu,"Lj");function Fa(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===Ye&&Ft()}}o(Fa,"Mj");function $a(e,t){var n=ye;ye&=-2,ye|=Zl;try{return e(t)}finally{ye=n,ye===Ye&&Ft()}}o($a,"Nj");function Bn(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cl(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:Cr(),ze(ct),ze(ot);break;case 5:Sl(r);break;case 4:Cr();break;case 13:ze(Be);break;case 19:ze(Be);break;case 10:xl(r)}n=n.return}gt=e,Ee=Qn(e.current,null),ft=t,qe=jn,Do=null,gi=qt=1073741823,Io=null,yi=0,Ao=!1}o(Bn,"Ej");function za(e,t){do{try{if(wl(),Eo.current=To,Co)for(var n=Ke.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(fn=0,st=lt=Ke=null,Co=!1,Ee===null||Ee.return===null)return qe=Po,Do=t,Ee=null;e:{var i=e,u=Ee.return,c=Ee,m=t;if(t=ft,c.effectTag|=2048,c.firstEffect=c.lastEffect=null,m!==null&&typeof m=="object"&&typeof m.then=="function"){var C=m;if((c.mode&2)==0){var k=c.alternate;k?(c.updateQueue=k.updateQueue,c.memoizedState=k.memoizedState,c.expirationTime=k.expirationTime):(c.updateQueue=null,c.memoizedState=null)}var X=(Be.current&1)!=0,ee=u;do{var Se;if(Se=ee.tag===13){var Pe=ee.memoizedState;if(Pe!==null)Se=Pe.dehydrated!==null;else{var kt=ee.memoizedProps;Se=kt.fallback===void 0?!1:kt.unstable_avoidThisFallback!==!0?!0:!X}}if(Se){var tt=ee.updateQueue;if(tt===null){var x=new Set;x.add(C),ee.updateQueue=x}else tt.add(C);if((ee.mode&2)==0){if(ee.effectTag|=64,c.effectTag&=-2981,c.tag===1)if(c.alternate===null)c.tag=17;else{var w=cn(1073741823,null);w.tag=2,dn(c,w)}c.expirationTime=1073741823;break e}m=void 0,c=t;var S=i.pingCache;if(S===null?(S=i.pingCache=new Hu,m=new Set,S.set(C,m)):(m=S.get(C),m===void 0&&(m=new Set,S.set(C,m))),!m.has(c)){m.add(c);var H=Yu.bind(null,i,C,c);C.then(H,H)}ee.effectTag|=4096,ee.expirationTime=t;break e}ee=ee.return}while(ee!==null);m=Error((bt(c.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+Nr(c))}qe!==Yl&&(qe=Da),m=Bl(m,c),ee=u;do{switch(ee.tag){case 3:C=m,ee.effectTag|=4096,ee.expirationTime=t;var Z=Pa(ee,C,t);Ws(ee,Z);break e;case 1:C=m;var re=ee.type,pe=ee.stateNode;if((ee.effectTag&64)==0&&(typeof re.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(pn===null||!pn.has(pe)))){ee.effectTag|=4096,ee.expirationTime=t;var Le=Ra(ee,C,t);Ws(ee,Le);break e}}ee=ee.return}while(ee!==null)}Ee=Ba(Ee)}catch(He){t=He;continue}break}while(1)}o(za,"Hj");function ja(){var e=Lo.current;return Lo.current=To,e===null?To:e}o(ja,"Fj");function Ha(e,t){e<qt&&2<e&&(qt=e),t!==null&&e<gi&&2<e&&(gi=e,Io=t)}o(Ha,"Ag");function Vo(e){e>yi&&(yi=e)}o(Vo,"Bg");function Uu(){for(;Ee!==null;)Ee=Va(Ee)}o(Uu,"Kj");function Wu(){for(;Ee!==null&&!Mu();)Ee=Va(Ee)}o(Wu,"Gj");function Va(e){var t=Wa(e.alternate,e,ft);return e.memoizedProps=e.pendingProps,t===null&&(t=Ba(e)),Oa.current=null,t}o(Va,"Qj");function Ba(e){Ee=e;do{var t=Ee.alternate;if(e=Ee.return,(Ee.effectTag&2048)==0){if(t=Iu(t,Ee,ft),ft===1||Ee.childExpirationTime!==1){for(var n=0,r=Ee.child;r!==null;){var i=r.expirationTime,u=r.childExpirationTime;i>n&&(n=i),u>n&&(n=u),r=r.sibling}Ee.childExpirationTime=n}if(t!==null)return t;e!==null&&(e.effectTag&2048)==0&&(e.firstEffect===null&&(e.firstEffect=Ee.firstEffect),Ee.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=Ee.firstEffect),e.lastEffect=Ee.lastEffect),1<Ee.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=Ee:e.firstEffect=Ee,e.lastEffect=Ee))}else{if(t=Au(Ee),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(t=Ee.sibling,t!==null)return t;Ee=e}while(Ee!==null);return qe===jn&&(qe=Yl),null}o(Ba,"Pj");function es(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}o(es,"Ij");function Un(e){var t=co();return an(99,Qu.bind(null,e,t)),null}o(Un,"Jj");function Qu(e,t){do br();while(wi!==null);if((ye&(Mt|jt))!==Ye)throw Error(p(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(p(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=es(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===gt&&(Ee=gt=null,ft=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){var u=ye;ye|=jt,Oa.current=null,Gr=fr;var c=eo();if(Yr(c)){if("selectionStart"in c)var m={start:c.selectionStart,end:c.selectionEnd};else e:{m=(m=c.ownerDocument)&&m.defaultView||window;var C=m.getSelection&&m.getSelection();if(C&&C.rangeCount!==0){m=C.anchorNode;var k=C.anchorOffset,X=C.focusNode;C=C.focusOffset;try{m.nodeType,X.nodeType}catch(Ce){m=null;break e}var ee=0,Se=-1,Pe=-1,kt=0,tt=0,x=c,w=null;t:for(;;){for(var S;x!==m||k!==0&&x.nodeType!==3||(Se=ee+k),x!==X||C!==0&&x.nodeType!==3||(Pe=ee+C),x.nodeType===3&&(ee+=x.nodeValue.length),(S=x.firstChild)!==null;)w=x,x=S;for(;;){if(x===c)break t;if(w===m&&++kt===k&&(Se=ee),w===X&&++tt===C&&(Pe=ee),(S=x.nextSibling)!==null)break;x=w,w=x.parentNode}x=S}m=Se===-1||Pe===-1?null:{start:Se,end:Pe}}else m=null}m=m||{start:0,end:0}}else m=null;Jr={activeElementDetached:null,focusedElem:c,selectionRange:m},fr=!1,ue=i;do try{Ku()}catch(Ce){if(ue===null)throw Error(p(330));Wn(ue,Ce),ue=ue.nextEffect}while(ue!==null);ue=i;do try{for(c=e,m=t;ue!==null;){var H=ue.effectTag;if(H&16&&Jt(ue.stateNode,""),H&128){var Z=ue.alternate;if(Z!==null){var re=Z.ref;re!==null&&(typeof re=="function"?re(null):re.current=null)}}switch(H&1038){case 2:Na(ue),ue.effectTag&=-3;break;case 6:Na(ue),ue.effectTag&=-3,Kl(ue.alternate,ue);break;case 1024:ue.effectTag&=-1025;break;case 1028:ue.effectTag&=-1025,Kl(ue.alternate,ue);break;case 4:Kl(ue.alternate,ue);break;case 8:k=ue,Ma(c,k,m),Sa(k)}ue=ue.nextEffect}}catch(Ce){if(ue===null)throw Error(p(330));Wn(ue,Ce),ue=ue.nextEffect}while(ue!==null);if(re=Jr,Z=eo(),H=re.focusedElem,m=re.selectionRange,Z!==H&&H&&H.ownerDocument&&Zr(H.ownerDocument.documentElement,H)){for(m!==null&&Yr(H)&&(Z=m.start,re=m.end,re===void 0&&(re=Z),"selectionStart"in H?(H.selectionStart=Z,H.selectionEnd=Math.min(re,H.value.length)):(re=(Z=H.ownerDocument||document)&&Z.defaultView||window,re.getSelection&&(re=re.getSelection(),k=H.textContent.length,c=Math.min(m.start,k),m=m.end===void 0?c:Math.min(m.end,k),!re.extend&&c>m&&(k=m,m=c,c=k),k=Ji(H,c),X=Ji(H,m),k&&X&&(re.rangeCount!==1||re.anchorNode!==k.node||re.anchorOffset!==k.offset||re.focusNode!==X.node||re.focusOffset!==X.offset)&&(Z=Z.createRange(),Z.setStart(k.node,k.offset),re.removeAllRanges(),c>m?(re.addRange(Z),re.extend(X.node,X.offset)):(Z.setEnd(X.node,X.offset),re.addRange(Z)))))),Z=[],re=H;re=re.parentNode;)re.nodeType===1&&Z.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof H.focus=="function"&&H.focus(),H=0;H<Z.length;H++)re=Z[H],re.element.scrollLeft=re.left,re.element.scrollTop=re.top}fr=!!Gr,Jr=Gr=null,e.current=n,ue=i;do try{for(H=e;ue!==null;){var pe=ue.effectTag;if(pe&36&&ju(H,ue.alternate,ue),pe&128){Z=void 0;var Le=ue.ref;if(Le!==null){var He=ue.stateNode;switch(ue.tag){case 5:Z=He;break;default:Z=He}typeof Le=="function"?Le(Z):Le.current=Z}}ue=ue.nextEffect}}catch(Ce){if(ue===null)throw Error(p(330));Wn(ue,Ce),ue=ue.nextEffect}while(ue!==null);ue=null,Lu(),ye=u}else e.current=n;if($o)$o=!1,wi=e,xi=t;else for(ue=i;ue!==null;)t=ue.nextEffect,ue.nextEffect=null,ue=t;if(t=e.firstPendingTime,t===0&&(pn=null),t===1073741823?e===Gl?Ei++:(Ei=0,Gl=e):Ei=0,typeof ts=="function"&&ts(n.stateNode,r),yt(e),Fo)throw Fo=!1,e=Xl,Xl=null,e;return(ye&Zl)!==Ye||Ft(),null}o(Qu,"Sj");function Ku(){for(;ue!==null;){var e=ue.effectTag;(e&256)!=0&&zu(ue.alternate,ue),(e&512)==0||$o||($o=!0,Hs(97,function(){return br(),null})),ue=ue.nextEffect}}o(Ku,"Tj");function br(){if(xi!==90){var e=97<xi?97:xi;return xi=90,an(e,Zu)}}o(br,"Dj");function Zu(){if(wi===null)return!1;var e=wi;if(wi=null,(ye&(Mt|jt))!==Ye)throw Error(p(331));var t=ye;for(ye|=jt,e=e.current.firstEffect;e!==null;){try{var n=e;if((n.effectTag&512)!=0)switch(n.tag){case 0:case 11:case 15:case 22:ka(5,n),_a(5,n)}}catch(r){if(e===null)throw Error(p(330));Wn(e,r)}n=e.nextEffect,e.nextEffect=null,e=n}return ye=t,Ft(),!0}o(Zu,"Vj");function Ua(e,t,n){t=Bl(n,t),t=Pa(e,t,1073741823),dn(e,t),e=jo(e,1073741823),e!==null&&yt(e)}o(Ua,"Wj");function Wn(e,t){if(e.tag===3)Ua(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Ua(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=Bl(t,e),e=Ra(n,e,1073741823),dn(n,e),n=jo(n,1073741823),n!==null&&yt(n);break}}n=n.return}}o(Wn,"Ei");function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),gt===e&&ft===n?qe===Oo||qe===Ro&&qt===1073741823&&xt()-ql<Ia?Bn(e,ft):Ao=!0:Qa(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,yt(e)))}o(Yu,"Oj");function qu(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=Ht(),t=Vn(t,e,null)),e=jo(e,t),e!==null&&yt(e)}o(qu,"Vi");var Wa;Wa=o(function(e,t,n){var r=t.expirationTime;if(e!==null){var i=t.pendingProps;if(e.memoizedProps!==i||ct.current)zt=!0;else{if(r<n){switch(zt=!1,t.tag){case 3:ha(t),Fl();break;case 5:if(Gs(t),t.mode&4&&n!==1&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:dt(t.type)&&so(t);break;case 4:bl(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,Qe(mo,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return r=t.child.childExpirationTime,r!==0&&r>=n?va(e,t,n):(Qe(Be,Be.current&1),t=Yt(e,t,n),t!==null?t.sibling:null);Qe(Be,Be.current&1);break;case 19:if(r=t.childExpirationTime>=n,(e.effectTag&64)!=0){if(r)return ya(e,t,n);t.effectTag|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null),Qe(Be,Be.current),!r)return null}return Yt(e,t,n)}zt=!1}}else zt=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=yr(t,ot.current),xr(t,n),i=Ml(null,t,r,e,i,n),t.effectTag|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)){var u=!0;so(t)}else u=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,El(t);var c=r.getDerivedStateFromProps;typeof c=="function"&&vo(t,r,c,e),i.updater=go,t.stateNode=i,i._reactInternalFiber=t,kl(t,r,e,n),t=zl(null,t,r,!0,u,n)}else t.tag=0,vt(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,Yo(i),i._status!==1)throw i._result;switch(i=i._result,t.type=i,u=t.tag=Ju(i),e=Nt(i,e),u){case 0:t=$l(null,t,i,e,n);break e;case 1:t=pa(null,t,i,e,n);break e;case 11:t=ca(null,t,i,e,n);break e;case 14:t=da(null,t,i,Nt(i.type,e),r,n);break e}throw Error(p(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),$l(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),pa(e,t,r,i,n);case 3:if(ha(t),r=t.updateQueue,e===null||r===null)throw Error(p(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,Cl(e,t),di(t,r,null,n),r=t.memoizedState.element,r===i)Fl(),t=Yt(e,t,n);else{if((i=t.stateNode.hydrate)&&(mn=on(t.stateNode.containerInfo.firstChild),Zt=t,i=zn=!0),i)for(n=_l(t,null,r,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else vt(e,t,r,n),Fl();t=t.child}return t;case 5:return Gs(t),e===null&&Al(t),r=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,c=i.children,ei(r,i)?c=null:u!==null&&ei(r,u)&&(t.effectTag|=16),ma(e,t),t.mode&4&&n!==1&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(vt(e,t,c,n),t=t.child),t;case 6:return e===null&&Al(t),null;case 13:return va(e,t,n);case 4:return bl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Er(t,null,r,n):vt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),ca(e,t,r,i,n);case 7:return vt(e,t,t.pendingProps,n),t.child;case 8:return vt(e,t,t.pendingProps.children,n),t.child;case 12:return vt(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,c=t.memoizedProps,u=i.value;var m=t.type._context;if(Qe(mo,m._currentValue),m._currentValue=u,c!==null)if(m=c.value,u=In(m,u)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(m,u):1073741823)|0,u===0){if(c.children===i.children&&!ct.current){t=Yt(e,t,n);break e}}else for(m=t.child,m!==null&&(m.return=t);m!==null;){var C=m.dependencies;if(C!==null){c=m.child;for(var k=C.firstContext;k!==null;){if(k.context===r&&(k.observedBits&u)!=0){m.tag===1&&(k=cn(n,null),k.tag=2,dn(m,k)),m.expirationTime<n&&(m.expirationTime=n),k=m.alternate,k!==null&&k.expirationTime<n&&(k.expirationTime=n),Us(m.return,n),C.expirationTime<n&&(C.expirationTime=n);break}k=k.next}}else c=m.tag===10&&m.type===t.type?null:m.child;if(c!==null)c.return=m;else for(c=m;c!==null;){if(c===t){c=null;break}if(m=c.sibling,m!==null){m.return=c.return,c=m;break}c=c.return}m=c}vt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,u=t.pendingProps,r=u.children,xr(t,n),i=Et(i,u.unstable_observedBits),r=r(i),t.effectTag|=1,vt(e,t,r,n),t.child;case 14:return i=t.type,u=Nt(i,t.pendingProps),u=Nt(i.type,u),da(e,t,i,u,r,n);case 15:return fa(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,dt(r)?(e=!0,so(t)):e=!1,xr(t,n),Ys(t,r,i),kl(t,r,i,n),zl(null,t,r,!0,e,n);case 19:return ya(e,t,n)}throw Error(p(156,t.tag))},"Rj");var ts=null,ns=null;function Xu(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);ts=o(function(r){try{t.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)==64)}catch(i){}},"Uj"),ns=o(function(r){try{t.onCommitFiberUnmount(n,r)}catch(i){}},"Li")}catch(r){}return!0}o(Xu,"Yj");function Gu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}o(Gu,"Zj");function Vt(e,t,n,r){return new Gu(e,t,n,r)}o(Vt,"Sh");function rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}o(rs,"bi");function Ju(e){if(typeof e=="function")return rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tr)return 11;if(e===Xn)return 14}return 2}o(Ju,"Xj");function Qn(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}o(Qn,"Sg");function Bo(e,t,n,r,i,u){var c=2;if(r=e,typeof e=="function")rs(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case _t:return vn(n.children,i,u,t);case Si:c=8,i|=7;break;case bi:c=8,i|=1;break;case Sr:return e=Vt(12,n,t,i|8),e.elementType=Sr,e.type=Sr,e.expirationTime=u,e;case qn:return e=Vt(13,n,t,i),e.type=qn,e.elementType=qn,e.expirationTime=u,e;case Je:return e=Vt(19,n,t,i),e.elementType=Je,e.expirationTime=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ko:c=10;break e;case wn:c=9;break e;case Tr:c=11;break e;case Xn:c=14;break e;case Zo:c=16,r=null;break e;case Ti:c=22;break e}throw Error(p(130,e==null?e:typeof e,""))}return t=Vt(c,n,t,i),t.elementType=e,t.type=r,t.expirationTime=u,t}o(Bo,"Ug");function vn(e,t,n,r){return e=Vt(7,e,r,t),e.expirationTime=n,e}o(vn,"Wg");function is(e,t,n){return e=Vt(6,e,null,t),e.expirationTime=n,e}o(is,"Tg");function os(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}o(os,"Vg");function ec(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}o(ec,"ak");function Qa(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}o(Qa,"Aj");function Kn(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}o(Kn,"xi");function Ka(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}o(Ka,"yi");function ls(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}o(ls,"Cj");function Uo(e,t,n,r){var i=t.current,u=Ht(),c=fi.suspense;u=Vn(u,i,c);e:if(n){n=n._reactInternalFiber;t:{if(Pt(n)!==n||n.tag!==1)throw Error(p(170));var m=n;do{switch(m.tag){case 3:m=m.stateNode.context;break t;case 1:if(dt(m.type)){m=m.stateNode.__reactInternalMemoizedMergedChildContext;break t}}m=m.return}while(m!==null);throw Error(p(171))}if(n.tag===1){var C=n.type;if(dt(C)){n=Ls(n,C,m);break e}}n=m}else n=sn;return t.context===null?t.context=n:t.pendingContext=n,t=cn(u,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),dn(i,t),hn(i,u),u}o(Uo,"bk");function ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}o(ss,"ck");function Za(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}o(Za,"dk");function as(e,t){Za(e,t),(e=e.alternate)&&Za(e,t)}o(as,"ek");function us(e,t,n){n=n!=null&&n.hydrate===!0;var r=new ec(e,t,n),i=Vt(3,null,null,t===2?7:t===1?3:0);r.current=i,i.stateNode=r,El(i),e[Rn]=r.current,n&&t!==0&&ds(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=r}o(us,"fk"),us.prototype.render=function(e){Uo(e,this._internalRoot,null,null)},us.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Uo(null,e,null,function(){t[Rn]=null})};function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}o(Ci,"gk");function tc(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new us(e,0,t?{hydrate:!0}:void 0)}o(tc,"hk");function Wo(e,t,n,r,i){var u=n._reactRootContainer;if(u){var c=u._internalRoot;if(typeof i=="function"){var m=i;i=o(function(){var k=ss(c);m.call(k)},"e")}Uo(t,c,e,i)}else{if(u=n._reactRootContainer=tc(n,r),c=u._internalRoot,typeof i=="function"){var C=i;i=o(function(){var k=ss(c);C.call(k)},"e")}$a(function(){Uo(t,c,e,i)})}return ss(c)}o(Wo,"ik");function nc(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}o(nc,"jk"),zi=o(function(e){if(e.tag===13){var t=fo(Ht(),150,100);hn(e,t),as(e,t)}},"wc"),Fr=o(function(e){e.tag===13&&(hn(e,3),as(e,3))},"xc"),ji=o(function(e){if(e.tag===13){var t=Ht();t=Vn(t,e,null),hn(e,t),as(e,t)}},"yc"),ne=o(function(e,t,n){switch(t){case"input":if(Mi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=a(r);if(!i)throw Error(p(90));Ni(r),Mi(r,i)}}}break;case"textarea":Oi(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}},"za"),Ae=Fa,Ze=o(function(e,t,n,r,i){var u=ye;ye|=4;try{return an(98,e.bind(null,t,n,r,i))}finally{ye=u,ye===Ye&&Ft()}},"Ga"),Xe=o(function(){(ye&(1|Mt|jt))===Ye&&(Bu(),br())},"Ha"),nt=o(function(e,t){var n=ye;ye|=2;try{return e(t)}finally{ye=n,ye===Ye&&Ft()}},"Ia");function Ya(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ci(t))throw Error(p(200));return nc(e,t,null,n)}o(Ya,"kk");var rc={Events:[Dn,l,a,K,N,F,function(e){wt(e,R)},Me,Fe,nn,sr,br,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return Xu($({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=el(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return t?t(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:On,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}),te=rc,te=Ya,te=o(function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):Error(p(268,Object.keys(e)));return e=el(t),e=e===null?null:e.stateNode,e},"__webpack_unused_export__"),te=o(function(e,t){if((ye&(Mt|jt))!==Ye)throw Error(p(187));var n=ye;ye|=1;try{return an(99,e.bind(null,t))}finally{ye=n,Ft()}},"__webpack_unused_export__"),te=o(function(e,t,n){if(!Ci(t))throw Error(p(200));return Wo(null,e,t,!0,n)},"__webpack_unused_export__"),M.render=function(e,t,n){if(!Ci(t))throw Error(p(200));return Wo(null,e,t,!1,n)},te=o(function(e){if(!Ci(e))throw Error(p(40));return e._reactRootContainer?($a(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1},"__webpack_unused_export__"),te=Fa,te=o(function(e,t){return Ya(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},"__webpack_unused_export__"),te=o(function(e,t,n,r){if(!Ci(n))throw Error(p(200));if(e==null||e._reactInternalFiber===void 0)throw Error(p(38));return Wo(e,t,n,!1,r)},"__webpack_unused_export__"),te="16.14.0"},935:(Q,M,G)=>{"use strict";function te(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(te)}catch(J){console.error(J)}}o(te,"checkDCE"),te(),Q.exports=G(448)},408:(Q,M,G)=>{"use strict";/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te=G(418),J=typeof Symbol=="function"&&Symbol.for,$=J?Symbol.for("react.element"):60103,v=J?Symbol.for("react.portal"):60106,p=J?Symbol.for("react.fragment"):60107,D=J?Symbol.for("react.strict_mode"):60108,V=J?Symbol.for("react.profiler"):60114,s=J?Symbol.for("react.provider"):60109,B=J?Symbol.for("react.context"):60110,q=J?Symbol.for("react.forward_ref"):60112,fe=J?Symbol.for("react.suspense"):60113,Te=J?Symbol.for("react.memo"):60115,_e=J?Symbol.for("react.lazy"):60116,z=typeof Symbol=="function"&&Symbol.iterator;function Y(y){for(var L="https://reactjs.org/docs/error-decoder.html?invariant="+y,de=1;de<arguments.length;de++)L+="&args[]="+encodeURIComponent(arguments[de]);return"Minified React error #"+y+"; visit "+L+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}o(Y,"C");var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T={};function E(y,L,de){this.props=y,this.context=L,this.refs=T,this.updater=de||ae}o(E,"F"),E.prototype.isReactComponent={},E.prototype.setState=function(y,L){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error(Y(85));this.updater.enqueueSetState(this,y,L,"setState")},E.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function _(){}o(_,"G"),_.prototype=E.prototype;function W(y,L,de){this.props=y,this.context=L,this.refs=T,this.updater=de||ae}o(W,"H");var P=W.prototype=new _;P.constructor=W,te(P,E.prototype),P.isPureReactComponent=!0;var A={current:null},N=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(y,L,de){var we,le={},Ie=null,rt=null;if(L!=null)for(we in L.ref!==void 0&&(rt=L.ref),L.key!==void 0&&(Ie=""+L.key),L)N.call(L,we)&&!O.hasOwnProperty(we)&&(le[we]=L[we]);var ge=arguments.length-2;if(ge===1)le.children=de;else if(1<ge){for(var Ne=Array(ge),at=0;at<ge;at++)Ne[at]=arguments[at+2];le.children=Ne}if(y&&y.defaultProps)for(we in ge=y.defaultProps,ge)le[we]===void 0&&(le[we]=ge[we]);return{$$typeof:$,type:y,key:Ie,ref:rt,props:le,_owner:A.current}}o(j,"M");function K(y,L){return{$$typeof:$,type:y.type,key:L,ref:y.ref,props:y.props,_owner:y._owner}}o(K,"N");function oe(y){return typeof y=="object"&&y!==null&&y.$$typeof===$}o(oe,"O");function ne(y){var L={"=":"=0",":":"=2"};return"$"+(""+y).replace(/[=:]/g,function(de){return L[de]})}o(ne,"escape");var ie=/\/+/g,me=[];function be(y,L,de,we){if(me.length){var le=me.pop();return le.result=y,le.keyPrefix=L,le.func=de,le.context=we,le.count=0,le}return{result:y,keyPrefix:L,func:de,context:we,count:0}}o(be,"R");function Me(y){y.result=null,y.keyPrefix=null,y.func=null,y.context=null,y.count=0,10>me.length&&me.push(y)}o(Me,"S");function Fe(y,L,de,we){var le=typeof y;(le==="undefined"||le==="boolean")&&(y=null);var Ie=!1;if(y===null)Ie=!0;else switch(le){case"string":case"number":Ie=!0;break;case"object":switch(y.$$typeof){case $:case v:Ie=!0}}if(Ie)return de(we,y,L===""?"."+Ze(y,0):L),1;if(Ie=0,L=L===""?".":L+":",Array.isArray(y))for(var rt=0;rt<y.length;rt++){le=y[rt];var ge=L+Ze(le,rt);Ie+=Fe(le,ge,de,we)}else if(y===null||typeof y!="object"?ge=null:(ge=z&&y[z]||y["@@iterator"],ge=typeof ge=="function"?ge:null),typeof ge=="function")for(y=ge.call(y),rt=0;!(le=y.next()).done;)le=le.value,ge=L+Ze(le,rt++),Ie+=Fe(le,ge,de,we);else if(le==="object")throw de=""+y,Error(Y(31,de==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":de,""));return Ie}o(Fe,"T");function Ae(y,L,de){return y==null?0:Fe(y,"",L,de)}o(Ae,"V");function Ze(y,L){return typeof y=="object"&&y!==null&&y.key!=null?ne(y.key):L.toString(36)}o(Ze,"U");function Xe(y,L){y.func.call(y.context,L,y.count++)}o(Xe,"W");function nt(y,L,de){var we=y.result,le=y.keyPrefix;y=y.func.call(y.context,L,y.count++),Array.isArray(y)?Re(y,we,de,function(Ie){return Ie}):y!=null&&(oe(y)&&(y=K(y,le+(!y.key||L&&L.key===y.key?"":(""+y.key).replace(ie,"$&/")+"/")+de)),we.push(y))}o(nt,"aa");function Re(y,L,de,we,le){var Ie="";de!=null&&(Ie=(""+de).replace(ie,"$&/")+"/"),L=be(L,Ie,we,le),Ae(y,nt,L),Me(L)}o(Re,"X");var I={current:null};function U(){var y=I.current;if(y===null)throw Error(Y(321));return y}o(U,"Z");var he={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:A,IsSomeRendererActing:{current:!1},assign:te};M.Children={map:function(y,L,de){if(y==null)return y;var we=[];return Re(y,we,null,L,de),we},forEach:function(y,L,de){if(y==null)return y;L=be(null,null,L,de),Ae(y,Xe,L),Me(L)},count:function(y){return Ae(y,function(){return null},null)},toArray:function(y){var L=[];return Re(y,L,null,function(de){return de}),L},only:function(y){if(!oe(y))throw Error(Y(143));return y}},M.Component=E,M.Fragment=p,M.Profiler=V,M.PureComponent=W,M.StrictMode=D,M.Suspense=fe,M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,M.cloneElement=function(y,L,de){if(y==null)throw Error(Y(267,y));var we=te({},y.props),le=y.key,Ie=y.ref,rt=y._owner;if(L!=null){if(L.ref!==void 0&&(Ie=L.ref,rt=A.current),L.key!==void 0&&(le=""+L.key),y.type&&y.type.defaultProps)var ge=y.type.defaultProps;for(Ne in L)N.call(L,Ne)&&!O.hasOwnProperty(Ne)&&(we[Ne]=L[Ne]===void 0&&ge!==void 0?ge[Ne]:L[Ne])}var Ne=arguments.length-2;if(Ne===1)we.children=de;else if(1<Ne){ge=Array(Ne);for(var at=0;at<Ne;at++)ge[at]=arguments[at+2];we.children=ge}return{$$typeof:$,type:y.type,key:le,ref:Ie,props:we,_owner:rt}},M.createContext=function(y,L){return L===void 0&&(L=null),y={$$typeof:B,_calculateChangedBits:L,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider={$$typeof:s,_context:y},y.Consumer=y},M.createElement=j,M.createFactory=function(y){var L=j.bind(null,y);return L.type=y,L},M.createRef=function(){return{current:null}},M.forwardRef=function(y){return{$$typeof:q,render:y}},M.isValidElement=oe,M.lazy=function(y){return{$$typeof:_e,_ctor:y,_status:-1,_result:null}},M.memo=function(y,L){return{$$typeof:Te,type:y,compare:L===void 0?null:L}},M.useCallback=function(y,L){return U().useCallback(y,L)},M.useContext=function(y,L){return U().useContext(y,L)},M.useDebugValue=function(){},M.useEffect=function(y,L){return U().useEffect(y,L)},M.useImperativeHandle=function(y,L,de){return U().useImperativeHandle(y,L,de)},M.useLayoutEffect=function(y,L){return U().useLayoutEffect(y,L)},M.useMemo=function(y,L){return U().useMemo(y,L)},M.useReducer=function(y,L,de){return U().useReducer(y,L,de)},M.useRef=function(y){return U().useRef(y)},M.useState=function(y){return U().useState(y)},M.version="16.14.0"},294:(Q,M,G)=>{"use strict";Q.exports=G(408)},53:(Q,M)=>{"use strict";/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G,te,J,$,v;if(typeof window=="undefined"||typeof MessageChannel!="function"){var p=null,D=null,V=o(function(){if(p!==null)try{var I=M.unstable_now();p(!0,I),p=null}catch(U){throw setTimeout(V,0),U}},"t"),s=Date.now();M.unstable_now=function(){return Date.now()-s},G=o(function(I){p!==null?setTimeout(G,0,I):(p=I,setTimeout(V,0))},"f"),te=o(function(I,U){D=setTimeout(I,U)},"g"),J=o(function(){clearTimeout(D)},"h"),$=o(function(){return!1},"k"),v=M.unstable_forceFrameRate=function(){}}else{var B=window.performance,q=window.Date,fe=window.setTimeout,Te=window.clearTimeout;if(typeof console!="undefined"){var _e=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof _e!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof B=="object"&&typeof B.now=="function")M.unstable_now=function(){return B.now()};else{var z=q.now();M.unstable_now=function(){return q.now()-z}}var Y=!1,ae=null,T=-1,E=5,_=0;$=o(function(){return M.unstable_now()>=_},"k"),v=o(function(){},"l"),M.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):E=0<I?Math.floor(1e3/I):5};var W=new MessageChannel,P=W.port2;W.port1.onmessage=function(){if(ae!==null){var I=M.unstable_now();_=I+E;try{ae(!0,I)?P.postMessage(null):(Y=!1,ae=null)}catch(U){throw P.postMessage(null),U}}else Y=!1},G=o(function(I){ae=I,Y||(Y=!0,P.postMessage(null))},"f"),te=o(function(I,U){T=fe(function(){I(M.unstable_now())},U)},"g"),J=o(function(){Te(T),T=-1},"h")}function A(I,U){var he=I.length;I.push(U);e:for(;;){var y=he-1>>>1,L=I[y];if(L!==void 0&&0<j(L,U))I[y]=U,I[he]=L,he=y;else break e}}o(A,"J");function N(I){return I=I[0],I===void 0?null:I}o(N,"L");function O(I){var U=I[0];if(U!==void 0){var he=I.pop();if(he!==U){I[0]=he;e:for(var y=0,L=I.length;y<L;){var de=2*(y+1)-1,we=I[de],le=de+1,Ie=I[le];if(we!==void 0&&0>j(we,he))Ie!==void 0&&0>j(Ie,we)?(I[y]=Ie,I[le]=he,y=le):(I[y]=we,I[de]=he,y=de);else if(Ie!==void 0&&0>j(Ie,he))I[y]=Ie,I[le]=he,y=le;else break e}}return U}return null}o(O,"M");function j(I,U){var he=I.sortIndex-U.sortIndex;return he!==0?he:I.id-U.id}o(j,"K");var K=[],oe=[],ne=1,ie=null,me=3,be=!1,Me=!1,Fe=!1;function Ae(I){for(var U=N(oe);U!==null;){if(U.callback===null)O(oe);else if(U.startTime<=I)O(oe),U.sortIndex=U.expirationTime,A(K,U);else break;U=N(oe)}}o(Ae,"V");function Ze(I){if(Fe=!1,Ae(I),!Me)if(N(K)!==null)Me=!0,G(Xe);else{var U=N(oe);U!==null&&te(Ze,U.startTime-I)}}o(Ze,"W");function Xe(I,U){Me=!1,Fe&&(Fe=!1,J()),be=!0;var he=me;try{for(Ae(U),ie=N(K);ie!==null&&(!(ie.expirationTime>U)||I&&!$());){var y=ie.callback;if(y!==null){ie.callback=null,me=ie.priorityLevel;var L=y(ie.expirationTime<=U);U=M.unstable_now(),typeof L=="function"?ie.callback=L:ie===N(K)&&O(K),Ae(U)}else O(K);ie=N(K)}if(ie!==null)var de=!0;else{var we=N(oe);we!==null&&te(Ze,we.startTime-U),de=!1}return de}finally{ie=null,me=he,be=!1}}o(Xe,"X");function nt(I){switch(I){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}o(nt,"Y");var Re=v;M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(I){I.callback=null},M.unstable_continueExecution=function(){Me||be||(Me=!0,G(Xe))},M.unstable_getCurrentPriorityLevel=function(){return me},M.unstable_getFirstCallbackNode=function(){return N(K)},M.unstable_next=function(I){switch(me){case 1:case 2:case 3:var U=3;break;default:U=me}var he=me;me=U;try{return I()}finally{me=he}},M.unstable_pauseExecution=function(){},M.unstable_requestPaint=Re,M.unstable_runWithPriority=function(I,U){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var he=me;me=I;try{return U()}finally{me=he}},M.unstable_scheduleCallback=function(I,U,he){var y=M.unstable_now();if(typeof he=="object"&&he!==null){var L=he.delay;L=typeof L=="number"&&0<L?y+L:y,he=typeof he.timeout=="number"?he.timeout:nt(I)}else he=nt(I),L=y;return he=L+he,I={id:ne++,callback:U,priorityLevel:I,startTime:L,expirationTime:he,sortIndex:-1},L>y?(I.sortIndex=L,A(oe,I),N(K)===null&&I===N(oe)&&(Fe?J():Fe=!0,te(Ze,L-y))):(I.sortIndex=he,A(K,I),Me||be||(Me=!0,G(Xe))),I},M.unstable_shouldYield=function(){var I=M.unstable_now();Ae(I);var U=N(K);return U!==ie&&ie!==null&&U!==null&&U.callback!==null&&U.startTime<=I&&U.expirationTime<ie.expirationTime||$()},M.unstable_wrapCallback=function(I){var U=me;return function(){var he=me;me=U;try{return I.apply(this,arguments)}finally{me=he}}}},840:(Q,M,G)=>{"use strict";Q.exports=G(53)},379:(Q,M,G)=>{"use strict";var te=o(function(){var Y;return o(function(){return typeof Y=="undefined"&&(Y=Boolean(window&&document&&document.all&&!window.atob)),Y},"memorize")},"isOldIE")(),J=o(function(){var Y={};return o(function(T){if(typeof Y[T]=="undefined"){var E=document.querySelector(T);if(window.HTMLIFrameElement&&E instanceof window.HTMLIFrameElement)try{E=E.contentDocument.head}catch(_){E=null}Y[T]=E}return Y[T]},"memorize")},"getTarget")(),$=[];function v(z){for(var Y=-1,ae=0;ae<$.length;ae++)if($[ae].identifier===z){Y=ae;break}return Y}o(v,"getIndexByIdentifier");function p(z,Y){for(var ae={},T=[],E=0;E<z.length;E++){var _=z[E],W=Y.base?_[0]+Y.base:_[0],P=ae[W]||0,A="".concat(W," ").concat(P);ae[W]=P+1;var N=v(A),O={css:_[1],media:_[2],sourceMap:_[3]};N!==-1?($[N].references++,$[N].updater(O)):$.push({identifier:A,updater:_e(O,Y),references:1}),T.push(A)}return T}o(p,"modulesToDom");function D(z){var Y=document.createElement("style"),ae=z.attributes||{};if(typeof ae.nonce=="undefined"){var T=G.nc;T&&(ae.nonce=T)}if(Object.keys(ae).forEach(function(_){Y.setAttribute(_,ae[_])}),typeof z.insert=="function")z.insert(Y);else{var E=J(z.insert||"head");if(!E)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");E.appendChild(Y)}return Y}o(D,"insertStyleElement");function V(z){if(z.parentNode===null)return!1;z.parentNode.removeChild(z)}o(V,"removeStyleElement");var s=o(function(){var Y=[];return o(function(T,E){return Y[T]=E,Y.filter(Boolean).join(`
`)},"replace")},"replaceText")();function B(z,Y,ae,T){var E=ae?"":T.media?"@media ".concat(T.media," {").concat(T.css,"}"):T.css;if(z.styleSheet)z.styleSheet.cssText=s(Y,E);else{var _=document.createTextNode(E),W=z.childNodes;W[Y]&&z.removeChild(W[Y]),W.length?z.insertBefore(_,W[Y]):z.appendChild(_)}}o(B,"applyToSingletonTag");function q(z,Y,ae){var T=ae.css,E=ae.media,_=ae.sourceMap;if(E?z.setAttribute("media",E):z.removeAttribute("media"),_&&typeof btoa!="undefined"&&(T+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),z.styleSheet)z.styleSheet.cssText=T;else{for(;z.firstChild;)z.removeChild(z.firstChild);z.appendChild(document.createTextNode(T))}}o(q,"applyToTag");var fe=null,Te=0;function _e(z,Y){var ae,T,E;if(Y.singleton){var _=Te++;ae=fe||(fe=D(Y)),T=B.bind(null,ae,_,!1),E=B.bind(null,ae,_,!0)}else ae=D(Y),T=q.bind(null,ae,Y),E=o(function(){V(ae)},"remove");return T(z),o(function(P){if(P){if(P.css===z.css&&P.media===z.media&&P.sourceMap===z.sourceMap)return;T(z=P)}else E()},"updateStyle")}o(_e,"addStyle"),Q.exports=function(z,Y){Y=Y||{},!Y.singleton&&typeof Y.singleton!="boolean"&&(Y.singleton=te()),z=z||[];var ae=p(z,Y);return o(function(E){if(E=E||[],Object.prototype.toString.call(E)==="[object Array]"){for(var _=0;_<ae.length;_++){var W=ae[_],P=v(W);$[P].references--}for(var A=p(E,Y),N=0;N<ae.length;N++){var O=ae[N],j=v(O);$[j].references===0&&($[j].updater(),$.splice(j,1))}ae=A}},"update")}},828:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.12 13.9725L15 12.5L9.37924 2H7.61921L1.99847 12.5L2.87849 13.9725H14.12ZM2.87849 12.9725L8.49922 2.47249L14.12 12.9725H2.87849ZM7.98949 6H8.98799V10H7.98949V6ZM7.98949 11H8.98799V12H7.98949V11Z" fill="#C5C5C5"></path></svg>'},60:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" fill="#C5C5C5"></path></svg>'},274:Q=>{Q.exports='<svg viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.97612 10.0719L12.3334 5.7146L12.9521 6.33332L8.28548 11L7.66676 11L3.0001 6.33332L3.61882 5.7146L7.97612 10.0719Z" fill="#C5C5C5"></path></svg>'},651:Q=>{Q.exports='<svg viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path></svg>'},832:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52 0H8.48V4.05333C9.47556 4.16 10.3111 4.58667 10.9867 5.33333C11.6622 6.08 12 6.96889 12 8C12 9.03111 11.6622 9.92 10.9867 10.6667C10.3111 11.4133 9.47556 11.84 8.48 11.9467V16H7.52V11.9467C6.52444 11.84 5.68889 11.4133 5.01333 10.6667C4.33778 9.92 4 9.03111 4 8C4 6.96889 4.33778 6.08 5.01333 5.33333C5.68889 4.58667 6.52444 4.16 7.52 4.05333V0ZM8 10.6133C8.71111 10.6133 9.31556 10.3644 9.81333 9.86667C10.3467 9.33333 10.6133 8.71111 10.6133 8C10.6133 7.28889 10.3467 6.68444 9.81333 6.18667C9.31556 5.65333 8.71111 5.38667 8 5.38667C7.28889 5.38667 6.66667 5.65333 6.13333 6.18667C5.63556 6.68444 5.38667 7.28889 5.38667 8C5.38667 8.71111 5.63556 9.33333 6.13333 9.86667C6.66667 10.3644 7.28889 10.6133 8 10.6133Z" fill="#A0A0A0"></path></svg>'},776:Q=>{Q.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>'},190:Q=>{Q.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:evenodd;fill:#FFFFFF;fill-opacity:1;" d="M 14 0 C 6.265625 0 0 6.265625 0 14 C 0 20.195312 4.007812 25.425781 9.574219 27.285156 C 10.273438 27.402344 10.535156 26.984375 10.535156 26.617188 C 10.535156 26.285156 10.515625 25.183594 10.515625 24.011719 C 7 24.660156 6.089844 23.152344 5.808594 22.363281 C 5.652344 21.960938 4.972656 20.722656 4.375 20.386719 C 3.886719 20.125 3.183594 19.476562 4.359375 19.460938 C 5.460938 19.441406 6.246094 20.476562 6.511719 20.894531 C 7.769531 23.011719 9.785156 22.417969 10.585938 22.050781 C 10.710938 21.140625 11.078125 20.527344 11.480469 20.175781 C 8.363281 19.828125 5.109375 18.621094 5.109375 13.265625 C 5.109375 11.742188 5.652344 10.484375 6.546875 9.503906 C 6.402344 9.152344 5.914062 7.714844 6.683594 5.792969 C 6.683594 5.792969 7.859375 5.425781 10.535156 7.226562 C 11.652344 6.914062 12.847656 6.753906 14.035156 6.753906 C 15.226562 6.753906 16.414062 6.914062 17.535156 7.226562 C 20.210938 5.410156 21.386719 5.792969 21.386719 5.792969 C 22.152344 7.714844 21.664062 9.152344 21.523438 9.503906 C 22.417969 10.484375 22.960938 11.726562 22.960938 13.265625 C 22.960938 18.636719 19.6875 19.828125 16.574219 20.175781 C 17.078125 20.613281 17.515625 21.453125 17.515625 22.765625 C 17.515625 24.640625 17.5 26.144531 17.5 26.617188 C 17.5 26.984375 17.761719 27.421875 18.460938 27.285156 C 24.160156 25.359375 27.996094 20.015625 28 14 C 28 6.265625 21.734375 0 14 0 Z M 14 0 "></path></g></svg>'},879:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8.69333L11.6267 12.3733L12.3733 11.6267L8.69333 8L12.3733 4.37333L11.6267 3.62667L8 7.30667L4.37333 3.62667L3.62667 4.37333L7.30667 8L3.62667 11.6267L4.37333 12.3733L8 8.69333Z" fill="#CCCCCC"></path></svg>'},938:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 10H6V8.97852H10V10Z" fill="#C5C5C5"></path><path d="M14.5 1H1.5L1 1.5V11.5L1.5 12H4V14.5L4.854 14.854L7.707 12H14.5L15 11.5V1.5L14.5 1ZM14 11H7.5L7.146 11.146L5 13.293V11.5L4.5 11H2V2H14V11Z" fill="#C5C5C5"></path><path d="M-478 -576H-378V-476H-478V-576Z" fill="#C5C5C5"></path><path d="M7.5 3H8.5V8H7.5V3Z" fill="#C5C5C5"></path><path d="M10.5 5L10.5 6L5.5 6L5.5 5L10.5 5Z" fill="#C5C5C5"></path></g><defs><clipPath id="clip0"><rect width="14" height="14" fill="white" transform="translate(1 1)"></rect></clipPath></defs></svg>'},343:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4C8.35556 4 8.71111 4.05333 9.06667 4.16C9.74222 4.33778 10.3289 4.67556 10.8267 5.17333C11.3244 5.67111 11.6622 6.25778 11.84 6.93333C11.9467 7.28889 12 7.64444 12 8C12 8.35556 11.9467 8.71111 11.84 9.06667C11.6622 9.74222 11.3244 10.3289 10.8267 10.8267C10.3289 11.3244 9.74222 11.6622 9.06667 11.84C8.71111 11.9467 8.35556 12 8 12C7.64444 12 7.28889 11.9467 6.93333 11.84C6.25778 11.6622 5.67111 11.3244 5.17333 10.8267C4.67556 10.3289 4.33778 9.74222 4.16 9.06667C4.05333 8.71111 4 8.35556 4 8C4 7.64444 4.03556 7.30667 4.10667 6.98667C4.21333 6.63111 4.35556 6.29333 4.53333 5.97333C4.88889 5.36889 5.36889 4.88889 5.97333 4.53333C6.29333 4.35556 6.61333 4.23111 6.93333 4.16C7.28889 4.05333 7.64444 4 8 4Z" fill="#CCCCCC"></path></svg>'},364:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.40706 15L1 13.5929L3.35721 9.46781L3.52339 9.25025L11.7736 1L13.2321 1L15 2.76791V4.22636L6.74975 12.4766L6.53219 12.6428L2.40706 15ZM2.40706 13.5929L6.02053 11.7474L14.2708 3.49714L12.5029 1.72923L4.25262 9.97947L2.40706 13.5929Z" fill="#C5C5C5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.64642 12.3536L3.64642 10.3536L4.35353 9.64645L6.35353 11.6464L5.64642 12.3536Z" fill="#C5C5C5"></path></svg>'},56:Q=>{Q.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.573.677L7.177 3.073a.25.25 0 000 .354l2.396 2.396A.25.25 0 0010 5.646V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5h-1V.854a.25.25 0 00-.427-.177zM6 12v-1.646a.25.25 0 01.427-.177l2.396 2.396a.25.25 0 010 .354l-2.396 2.396A.25.25 0 016 15.146V13.5H5A2.5 2.5 0 012.5 11V5.372a2.25 2.25 0 111.5 0V11a1 1 0 001 1h1zm6.75 0a.75.75 0 100 1.5.75.75 0 000-1.5zM4 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>'},589:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.99008 1C4.5965 1 4.21175 1.11671 3.8845 1.33538C3.55724 1.55404 3.30218 1.86484 3.15156 2.22846C3.00094 2.59208 2.96153 2.99221 3.03832 3.37823C3.1151 3.76425 3.30463 4.11884 3.58294 4.39714C3.83589 4.65009 4.15185 4.8297 4.49715 4.91798L4.49099 10.8286C4.40192 10.8517 4.31421 10.881 4.22852 10.9165C3.8649 11.0671 3.5541 11.3222 3.33544 11.6494C3.11677 11.9767 3.00006 12.3614 3.00006 12.755C3.00006 13.2828 3.20972 13.7889 3.58292 14.1621C3.95612 14.5353 4.46228 14.745 4.99006 14.745C5.38365 14.745 5.76839 14.6283 6.09565 14.4096C6.4229 14.191 6.67796 13.8802 6.82858 13.5165C6.9792 13.1529 7.01861 12.7528 6.94182 12.3668C6.86504 11.9807 6.67551 11.6262 6.3972 11.3479C6.14426 11.0949 5.8283 10.9153 5.48299 10.827V9.745H5.48915V8.80133C6.50043 10.3332 8.19531 11.374 10.1393 11.4893C10.2388 11.7413 10.3893 11.9714 10.5825 12.1648C10.8608 12.4432 11.2154 12.6328 11.6014 12.7097C11.9875 12.7866 12.3877 12.7472 12.7513 12.5966C13.115 12.446 13.4259 12.191 13.6446 11.8637C13.8633 11.5364 13.98 11.1516 13.98 10.758C13.98 10.2304 13.7705 9.72439 13.3975 9.35122C13.0245 8.97805 12.5186 8.76827 11.991 8.76801C11.5974 8.76781 11.2126 8.88435 10.8852 9.10289C10.5578 9.32144 10.3026 9.63216 10.1518 9.99577C10.0875 10.1509 10.0434 10.3127 10.0199 10.4772C7.48375 10.2356 5.48915 8.09947 5.48915 5.5C5.48915 5.33125 5.47282 5.16445 5.48915 5V4.9164C5.57823 4.89333 5.66594 4.86401 5.75162 4.82852C6.11525 4.6779 6.42604 4.42284 6.64471 4.09558C6.86337 3.76833 6.98008 3.38358 6.98008 2.99C6.98008 2.46222 6.77042 1.95605 6.39722 1.58286C6.02403 1.20966 5.51786 1 4.99008 1ZM4.99008 2C5.18593 1.9998 5.37743 2.0577 5.54037 2.16636C5.70331 2.27502 5.83035 2.42957 5.90544 2.61045C5.98052 2.79133 6.00027 2.99042 5.96218 3.18253C5.9241 3.37463 5.82989 3.55113 5.69147 3.68968C5.55306 3.82824 5.37666 3.92262 5.18459 3.9609C4.99252 3.99918 4.79341 3.97964 4.61246 3.90474C4.4315 3.82983 4.27682 3.70294 4.168 3.54012C4.05917 3.37729 4.00108 3.18585 4.00108 2.99C4.00135 2.72769 4.1056 2.47618 4.29098 2.29061C4.47637 2.10503 4.72777 2.00053 4.99008 2ZM4.99006 13.745C4.79422 13.7452 4.60271 13.6873 4.43977 13.5786C4.27684 13.47 4.14979 13.3154 4.07471 13.1345C3.99962 12.9537 3.97988 12.7546 4.01796 12.5625C4.05605 12.3704 4.15026 12.1939 4.28867 12.0553C4.42709 11.9168 4.60349 11.8224 4.79555 11.7841C4.98762 11.7458 5.18673 11.7654 5.36769 11.8403C5.54864 11.9152 5.70332 12.0421 5.81215 12.2049C5.92097 12.3677 5.97906 12.5591 5.97906 12.755C5.9788 13.0173 5.87455 13.2688 5.68916 13.4544C5.50377 13.64 5.25237 13.7445 4.99006 13.745ZM11.991 9.76801C12.1868 9.76801 12.3782 9.82607 12.541 9.93485C12.7038 10.0436 12.8307 10.1983 12.9057 10.3791C12.9806 10.56 13.0002 10.7591 12.962 10.9511C12.9238 11.1432 12.8295 11.3196 12.6911 11.458C12.5526 11.5965 12.3762 11.6908 12.1842 11.729C11.9921 11.7672 11.7931 11.7476 11.6122 11.6726C11.4313 11.5977 11.2767 11.4708 11.1679 11.308C11.0591 11.1452 11.001 10.9538 11.001 10.758C11.0013 10.4955 11.1057 10.2439 11.2913 10.0583C11.4769 9.87266 11.7285 9.76827 11.991 9.76801Z" fill="#C5C5C5"></path></svg>'},476:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7V8H8V14H7V8H1V7H7V1H8V7H14Z" fill="#C5C5C5"></path></svg>'},632:Q=>{Q.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>'},982:Q=>{Q.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.12 4.37333L8.58667 1.97333H7.41333L6.88 4.37333L6.18667 4.69333L4.21333 3.41333L3.30667 4.21333L4.58667 6.18667L4.42667 6.88L2.02667 7.41333V8.58667L4.42667 9.12L4.69333 9.92L3.41333 11.8933L4.21333 12.6933L6.18667 11.4133L6.98667 11.68L7.41333 13.9733H8.58667L9.12 11.5733L9.92 11.3067L11.8933 12.5867L12.6933 11.7867L11.4133 9.81333L11.68 9.01333L14.0267 8.58667V7.41333L11.6267 6.88L11.3067 6.08L12.5867 4.10667L11.7867 3.30667L9.81333 4.58667L9.12 4.37333ZM9.38667 1.01333L9.92 3.41333L12 2.08L14.0267 4.10667L12.5867 6.18667L14.9867 6.61333V9.38667L12.5867 9.92L14.0267 12L12 13.9733L9.92 12.5867L9.38667 14.9867H6.61333L6.08 12.5867L4 13.92L2.02667 11.8933L3.41333 9.81333L1.01333 9.38667V6.61333L3.41333 6.08L2.08 4L4.10667 1.97333L6.18667 3.41333L6.61333 1.01333H9.38667ZM10.0267 8C10.0267 8.53333 9.81333 8.99556 9.38667 9.38667C8.99556 9.77778 8.53333 9.97333 8 9.97333C7.46667 9.97333 7.00444 9.77778 6.61333 9.38667C6.22222 8.99556 6.02667 8.53333 6.02667 8C6.02667 7.46667 6.22222 7.00444 6.61333 6.61333C7.00444 6.18667 7.46667 5.97333 8 5.97333C8.53333 5.97333 8.99556 6.18667 9.38667 6.61333C9.81333 7.00444 10.0267 7.46667 10.0267 8ZM8 9.01333C8.28444 9.01333 8.51556 8.92444 8.69333 8.74667C8.90667 8.53333 9.01333 8.28444 9.01333 8C9.01333 7.71556 8.90667 7.48444 8.69333 7.30667C8.51556 7.09333 8.28444 6.98667 8 6.98667C7.71556 6.98667 7.46667 7.09333 7.25333 7.30667C7.07556 7.48444 6.98667 7.71556 6.98667 8C6.98667 8.28444 7.07556 8.53333 7.25333 8.74667C7.46667 8.92444 7.71556 9.01333 8 9.01333Z" fill="#CCCCCC"></path></svg>'},781:Q=>{Q.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.28 7.78a.75.75 0 00-1.06-1.06l-9.5 9.5a.75.75 0 101.06 1.06l9.5-9.5z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>'}},ki={};function ke(Q){var M=ki[Q];if(M!==void 0)return M.exports;var G=ki[Q]={id:Q,exports:{}};return Qo[Q].call(G.exports,G,G.exports,ke),G.exports}o(ke,"__webpack_require__"),(()=>{ke.n=Q=>{var M=Q&&Q.__esModule?()=>Q.default:()=>Q;return ke.d(M,{a:M}),M}})(),(()=>{ke.d=(Q,M)=>{for(var G in M)ke.o(M,G)&&!ke.o(Q,G)&&Object.defineProperty(Q,G,{enumerable:!0,get:M[G]})}})(),(()=>{ke.o=(Q,M)=>Object.prototype.hasOwnProperty.call(Q,M)})();var lc={};(()=>{"use strict";var Q=ke(379),M=ke.n(Q),G=ke(149),te={};te.insert="head",te.singleton=!1;var J=M()(G.Z,te);const $=G.Z.locals||{};var v=ke(238),p={};p.insert="head",p.singleton=!1;var D=M()(v.Z,p);const V=v.Z.locals||{};var s=ke(294),B=ke(935),q;(function(l){l[l.Committed=0]="Committed",l[l.Mentioned=1]="Mentioned",l[l.Subscribed=2]="Subscribed",l[l.Commented=3]="Commented",l[l.Reviewed=4]="Reviewed",l[l.NewCommitsSinceReview=5]="NewCommitsSinceReview",l[l.Labeled=6]="Labeled",l[l.Milestoned=7]="Milestoned",l[l.Assigned=8]="Assigned",l[l.HeadRefDeleted=9]="HeadRefDeleted",l[l.Merged=10]="Merged",l[l.Other=11]="Other"})(q||(q={}));var fe=Object.defineProperty,Te=o((l,a,d)=>(typeof a!="symbol"&&(a+=""),a in l?fe(l,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[a]=d),"__publicField");const _e=acquireVsCodeApi();class z{constructor(a){Te(this,"_commandHandler"),Te(this,"lastSentReq"),Te(this,"pendingReplies"),this._commandHandler=a,this.lastSentReq=0,this.pendingReplies=Object.create(null),window.addEventListener("message",this.handleMessage.bind(this))}registerCommandHandler(a){this._commandHandler=a}async postMessage(a){const d=String(++this.lastSentReq);return new Promise((f,h)=>{this.pendingReplies[d]={resolve:f,reject:h},a=Object.assign(a,{req:d}),_e.postMessage(a)})}handleMessage(a){const d=a.data;if(d.seq){const f=this.pendingReplies[d.seq];if(f){d.err?f.reject(d.err):f.resolve(d.res);return}}this._commandHandler&&this._commandHandler(d.res)}}o(z,"MessageHandler");function Y(l){return new z(l)}o(Y,"getMessageHandler");var ae;(function(l){l.Comment="comment",l.Approve="approve",l.RequestChanges="requestChanges"})(ae||(ae={}));function T(){return _e.getState()}o(T,"getState");function E(l){const a=T();a&&a.number&&a.number===l.number&&(l.pendingCommentText=a.pendingCommentText),l&&_e.setState(l)}o(E,"setState");function _(l){const a=_e.getState();_e.setState(Object.assign(a,l))}o(_,"updateState");var W=Object.defineProperty,P=o((l,a,d)=>(typeof a!="symbol"&&(a+=""),a in l?W(l,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[a]=d),"context_publicField");const A=o(class{constructor(l=T(),a=null,d=null){this.pr=l,this.onchange=a,this._handler=d,P(this,"setTitle",f=>this.postMessage({command:"pr.edit-title",args:{text:f}})),P(this,"setDescription",f=>this.postMessage({command:"pr.edit-description",args:{text:f}})),P(this,"checkout",()=>this.postMessage({command:"pr.checkout"})),P(this,"copyPrLink",()=>this.postMessage({command:"pr.copy-prlink"})),P(this,"copyVscodeDevLink",()=>this.postMessage({command:"pr.copy-vscodedevlink"})),P(this,"exitReviewMode",async()=>{if(!!this.pr)return this.postMessage({command:"pr.checkout-default-branch",args:this.pr.repositoryDefaultBranch})}),P(this,"gotoChangesSinceReview",()=>this.postMessage({command:"pr.gotoChangesSinceReview"})),P(this,"refresh",()=>this.postMessage({command:"pr.refresh"})),P(this,"checkMergeability",()=>this.postMessage({command:"pr.checkMergeability"})),P(this,"merge",f=>this.postMessage({command:"pr.merge",args:f})),P(this,"openOnGitHub",()=>this.postMessage({command:"pr.openOnGitHub"})),P(this,"deleteBranch",()=>this.postMessage({command:"pr.deleteBranch"})),P(this,"readyForReview",()=>this.postMessage({command:"pr.readyForReview"})),P(this,"comment",async f=>{const g=(await this.postMessage({command:"pr.comment",args:f})).value;g.event=q.Commented,this.updatePR({events:[...this.pr.events,g],pendingCommentText:""})}),P(this,"addReviewers",()=>this.postMessage({command:"pr.change-reviewers"})),P(this,"addMilestone",()=>this.postMessage({command:"pr.add-milestone"})),P(this,"removeMilestone",()=>this.postMessage({command:"pr.remove-milestone"})),P(this,"addAssignees",()=>this.postMessage({command:"pr.change-assignees"})),P(this,"addAssigneeYourself",()=>this.postMessage({command:"pr.add-assignee-yourself"})),P(this,"addLabels",()=>this.postMessage({command:"pr.add-labels"})),P(this,"create",()=>this.postMessage({command:"pr.open-create"})),P(this,"deleteComment",async f=>{await this.postMessage({command:"pr.delete-comment",args:f});const{pr:h}=this,{id:g,pullRequestReviewId:b}=f;if(!b){this.updatePR({events:h.events.filter(ce=>ce.id!==g)});return}const R=h.events.findIndex(ce=>ce.id===b);if(R===-1){console.error("Could not find review:",b);return}const F=h.events[R];if(!F.comments){console.error("No comments to delete for review:",b,F);return}this.pr.events.splice(R,1,{...F,comments:F.comments.filter(ce=>ce.id!==g)}),this.updatePR(this.pr)}),P(this,"editComment",f=>this.postMessage({command:"pr.edit-comment",args:f})),P(this,"updateDraft",(f,h)=>{const b=T().pendingCommentDrafts||Object.create(null);h!==b[f]&&(b[f]=h,this.updatePR({pendingCommentDrafts:b}))}),P(this,"requestChanges",async f=>this.appendReview(await this.postMessage({command:"pr.request-changes",args:f}))),P(this,"approve",async f=>this.appendReview(await this.postMessage({command:"pr.approve",args:f}))),P(this,"submit",async f=>this.appendReview(await this.postMessage({command:"pr.submit",args:f}))),P(this,"close",async f=>{try{this.appendReview(await this.postMessage({command:"pr.close",args:f}))}catch(h){}}),P(this,"removeLabel",async f=>{await this.postMessage({command:"pr.remove-label",args:f});const h=this.pr.labels.filter(g=>g.name!==f);this.updatePR({labels:h})}),P(this,"applyPatch",async f=>{this.postMessage({command:"pr.apply-patch",args:{comment:f}})}),P(this,"openDiff",f=>this.postMessage({command:"pr.open-diff",args:{comment:f}})),P(this,"toggleResolveComment",(f,h,g)=>{this.postMessage({command:"pr.resolve-comment-thread",args:{threadId:f,toResolve:g,thread:h}}).then(b=>{b?this.updatePR({events:b}):this.refresh()})}),P(this,"setPR",f=>(this.pr=f,E(this.pr),this.onchange&&this.onchange(this.pr),this)),P(this,"updatePR",f=>(_(f),this.pr={...this.pr,...f},this.onchange&&this.onchange(this.pr),this)),P(this,"handleMessage",f=>{switch(f.command){case"pr.initialize":return this.setPR(f.pullrequest);case"update-state":return this.updatePR({state:f.state});case"pr.update-checkout-status":return this.updatePR({isCurrentlyCheckedOut:f.isCurrentlyCheckedOut});case"pr.deleteBranch":const h={};return f.branchTypes&&f.branchTypes.map(b=>{b==="local"?h.isLocalHeadDeleted=!0:(b==="remote"||b==="upstream")&&(h.isRemoteHeadDeleted=!0)}),this.updatePR(h);case"pr.enable-exit":return this.updatePR({isCurrentlyCheckedOut:!0});case"set-scroll":window.scrollTo(f.scrollPosition.x,f.scrollPosition.y);return;case"pr.scrollToPendingReview":const g=document.getElementById("pending-review");g&&g.scrollIntoView();return}}),d||(this._handler=Y(this.handleMessage))}appendReview({review:l,reviewers:a}){const d=this.pr;d.events.filter(h=>h.event!==q.Reviewed||h.state.toLowerCase()!=="pending").forEach(h=>{h.event===q.Reviewed&&h.comments.forEach(g=>g.isDraft=!1)}),d.reviewers=a,d.events=[...d.events.filter(h=>h.event===q.Reviewed?h.state!=="PENDING":h),l],d.currentUserReviewState=l.state,this.updatePR(d)}async updateAutoMerge({autoMerge:l,autoMergeMethod:a}){const d=await this.postMessage({command:"pr.update-automerge",args:{autoMerge:l,autoMergeMethod:a}}),f=this.pr;f.autoMerge=d.autoMerge,f.autoMergeMethod=d.autoMergeMethod,this.updatePR(f)}postMessage(l){return this._handler.postMessage(l)}},"_PRContext");let N=A;P(N,"instance",new A);const j=(0,s.createContext)(N.instance);var K;(function(l){l[l.Query=0]="Query",l[l.All=1]="All",l[l.LocalPullRequest=2]="LocalPullRequest"})(K||(K={}));var oe;(function(l){l.Approve="APPROVE",l.RequestChanges="REQUEST_CHANGES",l.Comment="COMMENT"})(oe||(oe={}));var ne;(function(l){l[l.Open=0]="Open",l[l.Merged=1]="Merged",l[l.Closed=2]="Closed"})(ne||(ne={}));var ie;(function(l){l[l.Mergeable=0]="Mergeable",l[l.NotMergeable=1]="NotMergeable",l[l.Conflict=2]="Conflict",l[l.Unknown=3]="Unknown"})(ie||(ie={}));var me;(function(l){l.Success="success",l.Failure="failure",l.Neutral="neutral",l.Pending="pending",l.Unknown="unknown"})(me||(me={}));var be=ke(187);const Me=new be.EventEmitter;function Fe(l){const[a,d]=(0,s.useState)(l);return(0,s.useEffect)(()=>{a!==l&&d(l)},[l]),[a,d]}o(Fe,"useStateProp");var Ae,Ze=new Uint8Array(16);function Xe(){if(!Ae&&(Ae=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Ae))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ae(Ze)}o(Xe,"rng");const nt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Re(l){return typeof l=="string"&&nt.test(l)}o(Re,"validate");const I=Re;for(var U=[],he=0;he<256;++he)U.push((he+256).toString(16).substr(1));function y(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,d=(U[l[a+0]]+U[l[a+1]]+U[l[a+2]]+U[l[a+3]]+"-"+U[l[a+4]]+U[l[a+5]]+"-"+U[l[a+6]]+U[l[a+7]]+"-"+U[l[a+8]]+U[l[a+9]]+"-"+U[l[a+10]]+U[l[a+11]]+U[l[a+12]]+U[l[a+13]]+U[l[a+14]]+U[l[a+15]]).toLowerCase();if(!I(d))throw TypeError("Stringified UUID is invalid");return d}o(y,"stringify");const L=y;function de(l,a,d){l=l||{};var f=l.random||(l.rng||Xe)();if(f[6]=f[6]&15|64,f[8]=f[8]&63|128,a){d=d||0;for(var h=0;h<16;++h)a[d+h]=f[h];return a}return L(f)}o(de,"v4");const we=de,le=o(({className:l="",src:a,title:d})=>s.createElement("span",{className:`icon ${l}`,title:d,dangerouslySetInnerHTML:{__html:a}}),"Icon"),Ie=null,rt=s.createElement(le,{src:ke(828)}),ge=s.createElement(le,{src:ke(60)}),Ne=s.createElement(le,{src:ke(781)}),at=s.createElement(le,{src:ke(274)}),Zn=s.createElement(le,{src:ke(651)}),mt=s.createElement(le,{src:ke(832)}),_i=s.createElement(le,{src:ke(776)}),yn=s.createElement(le,{src:ke(879)}),Ge=s.createElement(le,{src:ke(589)}),Yn=s.createElement(le,{src:ke(364)}),Xt=s.createElement(le,{src:ke(476)}),_t=s.createElement(le,{src:ke(343)}),bi=s.createElement(le,{src:ke(938)}),Sr=s.createElement(le,{src:ke(632)}),Ko=s.createElement(le,{src:ke(56)}),wn=s.createElement(le,{src:ke(982)});var Si;(function(l){l[l.esc=27]="esc",l[l.down=40]="down",l[l.up=38]="up"})(Si||(Si={}));const Tr=o(({options:l,defaultOption:a,submitAction:d})=>{const[f,h]=(0,s.useState)(a),[g,b]=(0,s.useState)(!1),R=we(),F=`expandOptions${R}`,ce=o(()=>{b(!g)},"onClick"),ve=o(xe=>{h(xe.target.value),b(!1);const Oe=document.getElementById(`confirm-button${R}`);Oe==null||Oe.focus()},"onMethodChange"),se=o(xe=>{if(g){const Oe=document.activeElement;switch(xe.keyCode){case 27:b(!1);const De=document.getElementById(F);De==null||De.focus();break;case 40:if(!(Oe==null?void 0:Oe.id)||Oe.id===F){const et=document.getElementById(`${R}option0`);et==null||et.focus()}else{const et=new RegExp(`${R}option([0-9])`),Ue=Oe.id.match(et);if(Ue==null?void 0:Ue.length){const ut=parseInt(Ue[1]);if(ut<Object.entries(l).length-1){const St=document.getElementById(`${R}option${ut+1}`);St==null||St.focus()}}}break;case 38:if(!(Oe==null?void 0:Oe.id)||Oe.id===F){const et=Object.entries(l).length-1,Ue=document.getElementById(`${R}option${et}`);Ue==null||Ue.focus()}else{const et=new RegExp(`${R}option([0-9])`),Ue=Oe.id.match(et);if(Ue==null?void 0:Ue.length){const ut=parseInt(Ue[1]);if(ut>0){const St=document.getElementById(`${R}option${ut-1}`);St==null||St.focus()}}}break}}},"onKeyDown"),Ve=Object.entries(l).length===1?"hidden":g?"open":"";return s.createElement("div",{className:"select-container",onKeyDown:se},s.createElement("div",{className:"select-control"},s.createElement(qn,{dropdownId:R,className:Object.keys(l).length>1?"select-left":"",options:l,selected:f,submitAction:d}),s.createElement("button",{id:F,className:"select-right "+Ve,"aria-label":"Expand button options",onClick:ce},at)),s.createElement("div",{className:g?"options-select":"hidden"},Object.entries(l).map(([xe,Oe],De)=>s.createElement("button",{id:`${R}option${De}`,key:xe,value:xe,onClick:ve},Oe))))},"dropdown_Dropdown");function qn({dropdownId:l,className:a,options:d,selected:f,submitAction:h}){const[g,b]=(0,s.useState)(!1),R=o(async F=>{F.preventDefault();try{b(!0),await h(f)}finally{b(!1)}},"onSubmit");return s.createElement("form",{onSubmit:R},s.createElement("input",{disabled:g,type:"submit",className:a,id:`confirm-button${l}`,value:d[f]}))}o(qn,"Confirm");const Je=String.fromCharCode(160),Xn=o(({children:l})=>{const a=s.Children.count(l);return s.createElement(s.Fragment,{children:s.Children.map(l,(d,f)=>typeof d=="string"?`${f>0?Je:""}${d}${f<a-1&&typeof l[f+1]!="string"?Je:""}`:d)})},"Spaced");var Zo=ke(470),Ti=ke(484),xn=ke.n(Ti),En=ke(110),Yo=ke.n(En),bt=ke(660),Nr=ke.n(bt),Lt=Object.defineProperty,je=o((l,a,d)=>(typeof a!="symbol"&&(a+=""),a in l?Lt(l,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[a]=d),"utils_publicField");xn().extend(Yo(),{thresholds:[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:6,d:"day"},{l:"w",r:7},{l:"ww",r:3,d:"week"},{l:"M",r:4},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}]}),xn().extend(Nr()),xn().updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});function cs(l,a){const d=Object.create(null);return l.filter(f=>{const h=a(f);return d[h]?!1:(d[h]=!0,!0)})}o(cs,"uniqBy");function Gn(l){return l.forEach(a=>a.dispose()),[]}o(Gn,"dispose");function Ni(l){return{dispose:l}}o(Ni,"toDisposable");function Mr(l){return Ni(()=>Gn(l))}o(Mr,"combinedDisposable");function qo(...l){return(a,d=null,f)=>{const h=Mr(l.map(g=>g(b=>a.call(d,b))));return f&&f.push(h),h}}o(qo,"anyEvent");function Xo(l,a){return(d,f=null,h)=>l(g=>a(g)&&d.call(f,g),null,h)}o(Xo,"filterEvent");function Mi(l){return(a,d=null,f)=>{const h=l(g=>(h.dispose(),a.call(d,g)),null,f);return h}}o(Mi,"onceEvent");function Li(l){return/^[a-zA-Z]:\\/.test(l)}o(Li,"isWindowsPath");function Pi(l,a){return l===a?!0:(l.charAt(l.length-1)!==sep&&(l+=sep),Li(l)&&(l=l.toLowerCase(),a=a.toLowerCase()),a.startsWith(l))}o(Pi,"isDescendant");function Ri(l,a){return l.reduce((d,f)=>{const h=a(f);return d[h]=[...d[h]||[],f],d},Object.create(null))}o(Ri,"groupBy");class Jn extends Error{constructor(a){super(`Unreachable case: ${a}`)}}o(Jn,"UnreachableCaseError");function Gt(l){return!!l.errors}o(Gt,"isHookError");function Lr(l){let a=!0;if(!!l.errors&&Array.isArray(l.errors)){for(const d of l.errors)if(!d.field||!d.value||!d.code){a=!1;break}}else a=!1;return a}o(Lr,"hasFieldErrors");function Go(l){if(!(l instanceof Error))return typeof l=="string"?l:l.gitErrorCode?`${l.message}. Please check git output for more details`:l.stderr?`${l.stderr}. Please check git output for more details`:"Error";let a=l.message,d;if(l.message==="Validation Failed"&&Lr(l))d=l.errors.map(f=>`Value "${f.value}" cannot be set for field ${f.field} (code: ${f.code})`).join(", ");else{if(l.message.startsWith("Validation Failed:"))return l.message;if(Gt(l)&&l.errors)return l.errors.map(f=>typeof f=="string"?f:f.message).join(", ")}return d&&(a=`${a}: ${d}`),a}o(Go,"formatError");const Oi=o((l,a)=>a(l),"passthrough");async function Jo(l,a=Oi){let d;return new Promise((f,h)=>d=l(g=>{try{Promise.resolve(a(g,f,h)).catch(h)}catch(b){h(b)}})).then(f=>(d.dispose(),f),f=>{throw d.dispose(),f})}o(Jo,"promiseFromEvent");function Pr(l){const a=xn()(l),d=Date.now();return a.diff(d,"month"),a.diff(d,"month")<1?a.fromNow():a.diff(d,"year")<1?`on ${a.format("MMM D")}`:`on ${a.format("MMM D, YYYY")}`}o(Pr,"dateFromNow");function Rr(l,a,d=!1){l.startsWith("#")&&(l=l.substring(1));const f=Cn(l);if(a){const h=Di(f.r,f.g,f.b),g=.6,b=.18,R=.3,F=(f.r*.2126+f.g*.7152+f.b*.0722)/255,ce=Math.max(0,Math.min((F-g)*-1e3,1)),ve=(g-F)*100*ce,se=Cn(Jt(h.h,h.s,h.l+ve)),Ve=`#${Jt(h.h,h.s,h.l+ve)}`,xe=d?`#${er({...f,a:b})}`:`rgba(${f.r},${f.g},${f.b},${b})`,Oe=d?`#${er({...se,a:R})}`:`rgba(${se.r},${se.g},${se.b},${R})`;return{textColor:Ve,backgroundColor:xe,borderColor:Oe}}else return{textColor:`#${tr(f)}`,backgroundColor:`#${l}`,borderColor:`#${l}`}}o(Rr,"gitHubLabelColor");const er=o(l=>{const a=[l.r,l.g,l.b];return l.a&&a.push(Math.floor(l.a*255)),a.map(d=>d.toString(16).padStart(2,"0")).join("")},"rgbToHex");function Cn(l){const a=/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(l);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:{r:0,g:0,b:0}}o(Cn,"hexToRgb");function Di(l,a,d){l/=255,a/=255,d/=255;let f=Math.min(l,a,d),h=Math.max(l,a,d),g=h-f,b=0,R=0,F=0;return g==0?b=0:h==l?b=(a-d)/g%6:h==a?b=(d-l)/g+2:b=(l-a)/g+4,b=Math.round(b*60),b<0&&(b+=360),F=(h+f)/2,R=g==0?0:g/(1-Math.abs(2*F-1)),R=+(R*100).toFixed(1),F=+(F*100).toFixed(1),{h:b,s:R,l:F}}o(Di,"rgbToHsl");function Jt(l,a,d){const f=d/100,h=a*Math.min(f,1-f)/100,g=o(b=>{const R=(b+l/30)%12,F=f-h*Math.max(Math.min(R-3,9-R,1),-1);return Math.round(255*F).toString(16).padStart(2,"0")},"f");return`${g(0)}${g(8)}${g(4)}`}o(Jt,"hslToHex");function tr(l){return(.299*l.r+.587*l.g+.114*l.b)/255>.5?"000000":"ffffff"}o(tr,"contrastColor");var Bt;(function(l){l[l.Period=46]="Period",l[l.Slash=47]="Slash",l[l.A=65]="A",l[l.Z=90]="Z",l[l.Backslash=92]="Backslash",l[l.a=97]="a",l[l.z=122]="z"})(Bt||(Bt={}));function nr(l,a){return l<a?-1:l>a?1:0}o(nr,"compare");function rr(l,a,d=0,f=l.length,h=0,g=a.length){for(;d<f&&h<g;d++,h++){const F=l.charCodeAt(d),ce=a.charCodeAt(h);if(F<ce)return-1;if(F>ce)return 1}const b=f-d,R=g-h;return b<R?-1:b>R?1:0}o(rr,"compareSubstring");function kn(l,a){return ir(l,a,0,l.length,0,a.length)}o(kn,"compareIgnoreCase");function ir(l,a,d=0,f=l.length,h=0,g=a.length){for(;d<f&&h<g;d++,h++){let F=l.charCodeAt(d),ce=a.charCodeAt(h);if(F===ce)continue;const ve=F-ce;if(!(ve===32&&Dr(ce))&&!(ve===-32&&Dr(F)))return Or(F)&&Or(ce)?ve:rr(l.toLowerCase(),a.toLowerCase(),d,f,h,g)}const b=f-d,R=g-h;return b<R?-1:b>R?1:0}o(ir,"compareSubstringIgnoreCase");function Or(l){return l>=97&&l<=122}o(Or,"isLowerAsciiLetter");function Dr(l){return l>=65&&l<=90}o(Dr,"isUpperAsciiLetter");class Ir{constructor(){je(this,"_value",""),je(this,"_pos",0)}reset(a){return this._value=a,this._pos=0,this}next(){return this._pos+=1,this}hasNext(){return this._pos<this._value.length-1}cmp(a){const d=a.charCodeAt(0),f=this._value.charCodeAt(this._pos);return d-f}value(){return this._value[this._pos]}}o(Ir,"StringIterator");class en{constructor(a=!0){this._caseSensitive=a,je(this,"_value"),je(this,"_from"),je(this,"_to")}reset(a){return this._value=a,this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++)if(this._value.charCodeAt(this._to)===46)if(a)this._from++;else break;else a=!1;return this}cmp(a){return this._caseSensitive?rr(a,this._value,0,a.length,this._from,this._to):ir(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}}o(en,"ConfigKeysIterator");class or{constructor(a=!0,d=!0){this._splitOnBackslash=a,this._caseSensitive=d,je(this,"_value"),je(this,"_from"),je(this,"_to")}reset(a){return this._value=a.replace(/\\$|\/$/,""),this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++){const d=this._value.charCodeAt(this._to);if(d===47||this._splitOnBackslash&&d===92)if(a)this._from++;else break;else a=!1}return this}cmp(a){return this._caseSensitive?rr(a,this._value,0,a.length,this._from,this._to):ir(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}}o(or,"PathIterator");var lr;(function(l){l[l.Scheme=1]="Scheme",l[l.Authority=2]="Authority",l[l.Path=3]="Path",l[l.Query=4]="Query",l[l.Fragment=5]="Fragment"})(lr||(lr={}));class Pt{constructor(a){this._ignorePathCasing=a,je(this,"_pathIterator"),je(this,"_value"),je(this,"_states",[]),je(this,"_stateIdx",0)}reset(a){return this._value=a,this._states=[],this._value.scheme&&this._states.push(1),this._value.authority&&this._states.push(2),this._value.path&&(this._pathIterator=new or(!1,!this._ignorePathCasing(a)),this._pathIterator.reset(a.path),this._pathIterator.value()&&this._states.push(3)),this._value.query&&this._states.push(4),this._value.fragment&&this._states.push(5),this._stateIdx=0,this}next(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()?this._pathIterator.next():this._stateIdx+=1,this}hasNext(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()||this._stateIdx<this._states.length-1}cmp(a){if(this._states[this._stateIdx]===1)return kn(a,this._value.scheme);if(this._states[this._stateIdx]===2)return kn(a,this._value.authority);if(this._states[this._stateIdx]===3)return this._pathIterator.cmp(a);if(this._states[this._stateIdx]===4)return nr(a,this._value.query);if(this._states[this._stateIdx]===5)return nr(a,this._value.fragment);throw new Error}value(){if(this._states[this._stateIdx]===1)return this._value.scheme;if(this._states[this._stateIdx]===2)return this._value.authority;if(this._states[this._stateIdx]===3)return this._pathIterator.value();if(this._states[this._stateIdx]===4)return this._value.query;if(this._states[this._stateIdx]===5)return this._value.fragment;throw new Error}}o(Pt,"UriIterator");class tn{constructor(){je(this,"segment"),je(this,"value"),je(this,"key"),je(this,"left"),je(this,"mid"),je(this,"right")}isEmpty(){return!this.left&&!this.mid&&!this.right&&!this.value}}o(tn,"TernarySearchTreeNode");class Ut{constructor(a){je(this,"_iter"),je(this,"_root"),this._iter=a}static forUris(a=()=>!1){return new Ut(new Pt(a))}static forPaths(){return new Ut(new or)}static forStrings(){return new Ut(new Ir)}static forConfigKeys(){return new Ut(new en)}clear(){this._root=void 0}set(a,d){const f=this._iter.reset(a);let h;for(this._root||(this._root=new tn,this._root.segment=f.value()),h=this._root;;){const b=f.cmp(h.segment);if(b>0)h.left||(h.left=new tn,h.left.segment=f.value()),h=h.left;else if(b<0)h.right||(h.right=new tn,h.right.segment=f.value()),h=h.right;else if(f.hasNext())f.next(),h.mid||(h.mid=new tn,h.mid.segment=f.value()),h=h.mid;else break}const g=h.value;return h.value=d,h.key=a,g}get(a){var d;return(d=this._getNode(a))==null?void 0:d.value}_getNode(a){const d=this._iter.reset(a);let f=this._root;for(;f;){const h=d.cmp(f.segment);if(h>0)f=f.left;else if(h<0)f=f.right;else if(d.hasNext())d.next(),f=f.mid;else break}return f}has(a){const d=this._getNode(a);return!((d==null?void 0:d.value)===void 0&&(d==null?void 0:d.mid)===void 0)}delete(a){return this._delete(a,!1)}deleteSuperstr(a){return this._delete(a,!0)}_delete(a,d){const f=this._iter.reset(a),h=[];let g=this._root;for(;g;){const b=f.cmp(g.segment);if(b>0)h.push([1,g]),g=g.left;else if(b<0)h.push([-1,g]),g=g.right;else if(f.hasNext())f.next(),h.push([0,g]),g=g.mid;else{for(d?(g.left=void 0,g.mid=void 0,g.right=void 0):g.value=void 0;h.length>0&&g.isEmpty();){let[R,F]=h.pop();switch(R){case 1:F.left=void 0;break;case 0:F.mid=void 0;break;case-1:F.right=void 0;break}g=F}break}}}findSubstr(a){const d=this._iter.reset(a);let f=this._root,h;for(;f;){const g=d.cmp(f.segment);if(g>0)f=f.left;else if(g<0)f=f.right;else if(d.hasNext())d.next(),h=f.value||h,f=f.mid;else break}return f&&f.value||h}findSuperstr(a){const d=this._iter.reset(a);let f=this._root;for(;f;){const h=d.cmp(f.segment);if(h>0)f=f.left;else if(h<0)f=f.right;else if(d.hasNext())d.next(),f=f.mid;else return f.mid?this._entries(f.mid):void 0}}forEach(a){for(const[d,f]of this)a(f,d)}*[Symbol.iterator](){yield*this._entries(this._root)}*_entries(a){a&&(yield*this._entries(a.left),a.value&&(yield[a.key,a.value]),yield*this._entries(a.mid),yield*this._entries(a.right))}}o(Ut,"TernarySearchTree");const _n=o(({date:l,href:a})=>{const d=typeof l=="string"?new Date(l).toLocaleString():l.toLocaleString();return a?s.createElement("a",{href:a,className:"timestamp",title:d},Pr(l)):s.createElement("div",{className:"timestamp",title:d},Pr(l))},"Timestamp"),el=null,it=o(({for:l})=>s.createElement("a",{className:"avatar-link",href:l.url,title:l.url},l.avatarUrl?s.createElement("img",{className:"avatar",src:l.avatarUrl,alt:""}):s.createElement(le,{className:"avatar-icon",src:ke(190)})),"Avatar"),wt=o(({for:l,text:a=l.login})=>s.createElement("a",{className:"author-link",href:l.url,title:l.url},a),"AuthorLink");function Wt(l){const{id:a,pullRequestReviewId:d,canEdit:f,canDelete:h,bodyHTML:g,body:b,isPRDescription:R}=l,[F,ce]=Fe(b),[ve,se]=Fe(g),{deleteComment:Ve,editComment:xe,setDescription:Oe,pr:De}=(0,s.useContext)(j),et=De.pendingCommentDrafts&&De.pendingCommentDrafts[a],[Ue,ut]=(0,s.useState)(!!et),[St,ln]=(0,s.useState)(!1);return Ue?s.cloneElement(l.headerInEditMode?s.createElement(Ii,{for:l}):s.createElement(s.Fragment,null),{},[s.createElement(sr,{id:a,key:`editComment${a}`,body:et||F,onCancel:()=>{De.pendingCommentDrafts&&delete De.pendingCommentDrafts[a],ut(!1)},onSave:async We=>{try{const Tt=R?await Oe(We):await xe({comment:l,text:We});se(Tt.bodyHTML),ce(We)}finally{ut(!1)}}})]):s.createElement(Ii,{for:l,onMouseEnter:()=>ln(!0),onMouseLeave:()=>ln(!1)},St?s.createElement("div",{className:"action-bar comment-actions"},s.createElement("button",{title:"Quote reply",className:"icon-button",onClick:()=>Me.emit("quoteReply",F)},Zn),f?s.createElement("button",{title:"Edit comment",className:"icon-button",onClick:()=>ut(!0)},Yn):null,h?s.createElement("button",{title:"Delete comment",className:"icon-button",onClick:()=>Ve({id:a,pullRequestReviewId:d})},yn):null):null,s.createElement(ar,{comment:l,bodyHTML:ve,body:F,canApplyPatch:De.isCurrentlyCheckedOut}))}o(Wt,"CommentView");function Ii({for:l,onMouseEnter:a,onMouseLeave:d,children:f}){const{user:h,author:g,createdAt:b,htmlUrl:R,isDraft:F}=l;return s.createElement("div",{className:"comment-container comment review-comment",onMouseEnter:a,onMouseLeave:d},s.createElement("div",{className:"review-comment-container"},s.createElement("div",{className:"review-comment-header"},s.createElement(Xn,null,s.createElement(it,{for:h||g}),s.createElement(wt,{for:h||g}),b?s.createElement(s.Fragment,null,"commented",Je,s.createElement(_n,{href:R,date:b})):s.createElement("em",null,"pending"),F?s.createElement(s.Fragment,null,s.createElement("span",{className:"pending-label"},"Pending")):null)),f))}o(Ii,"CommentBox");function sr({id:l,body:a,onCancel:d,onSave:f}){const{updateDraft:h}=(0,s.useContext)(j),g=(0,s.useRef)({body:a,dirty:!1}),b=(0,s.useRef)();(0,s.useEffect)(()=>{const se=setInterval(()=>{g.current.dirty&&(h(l,g.current.body),g.current.dirty=!1)},500);return()=>clearInterval(se)},[g]);const R=(0,s.useCallback)(async()=>{const{markdown:se,submitButton:Ve}=b.current;Ve.disabled=!0;try{await f(se.value)}finally{Ve.disabled=!1}},[b,f]),F=(0,s.useCallback)(se=>{se.preventDefault(),R()},[R]),ce=(0,s.useCallback)(se=>{(se.metaKey||se.ctrlKey)&&se.key==="Enter"&&(se.preventDefault(),R())},[R]),ve=(0,s.useCallback)(se=>{g.current.body=se.target.value,g.current.dirty=!0},[g]);return s.createElement("form",{ref:b,onSubmit:F},s.createElement("textarea",{name:"markdown",defaultValue:a,onKeyDown:ce,onInput:ve}),s.createElement("div",{className:"form-actions"},s.createElement("button",{className:"secondary",onClick:d},"Cancel"),s.createElement("input",{type:"submit",name:"submitButton",value:"Save"})))}o(sr,"EditComment");const ar=o(({comment:l,bodyHTML:a,body:d,canApplyPatch:f})=>{if(!d&&!a)return s.createElement("div",{className:"comment-body"},s.createElement("em",null,"No description provided."));const{applyPatch:h}=(0,s.useContext)(j),g=s.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),R=(d||a).indexOf("```diff")>-1&&f?s.createElement("button",{onClick:()=>h(l)},"Apply Patch"):s.createElement(s.Fragment,null);return s.createElement("div",{className:"comment-body"},g,R)},"CommentBody");function Ai({pendingCommentText:l,state:a,hasWritePermission:d,isIssue:f,isAuthor:h,continueOnGitHub:g,currentUserReviewState:b}){const{updatePR:R,comment:F,requestChanges:ce,approve:ve,close:se,openOnGitHub:Ve}=(0,s.useContext)(j),[xe,Oe]=(0,s.useState)(!1),De=(0,s.useRef)(),et=(0,s.useRef)();Me.addListener("quoteReply",We=>{const Tt=We.replace(/\n\n/g,`

> `);R({pendingCommentText:`> ${Tt} 

`}),et.current.scrollIntoView(),et.current.focus()});const Ue=(0,s.useCallback)(async(We=F)=>{try{Oe(!0);const{body:Tt}=De.current;g&&We!==F?await Ve():(await We(Tt.value),R({pendingCommentText:""}))}finally{Oe(!1)}},[F,R,Oe]),ut=(0,s.useCallback)(We=>{We.preventDefault(),Ue()},[Ue]),St=(0,s.useCallback)(We=>{(We.metaKey||We.ctrlKey)&&We.key==="Enter"&&Ue()},[Ue]),ln=(0,s.useCallback)(We=>{We.preventDefault();const{command:Tt}=We.target.dataset;Ue({approve:ve,requestChanges:ce,close:se}[Tt])},[Ue,ve,ce,se]);return s.createElement("form",{id:"comment-form",ref:De,className:"comment-form main-comment-form",onSubmit:ut},s.createElement("textarea",{id:"comment-textarea",name:"body",ref:et,onInput:({target:We})=>R({pendingCommentText:We.value}),onKeyDown:St,value:l,placeholder:"Leave a comment"}),s.createElement("div",{className:"form-actions"},(d||h)&&!f?s.createElement("button",{id:"close",className:"secondary",disabled:xe||a!==ne.Open,onClick:ln,"data-command":"close"},"Close Pull Request"):null,!f&&!h?s.createElement("button",{id:"request-changes",disabled:xe||!l,className:"secondary",onClick:ln,"data-command":"requestChanges"},g?"Request changes on github.com":"Request Changes"):null,!f&&!h?s.createElement("button",{id:"approve",className:"secondary",disabled:xe||b==="APPROVED",onClick:ln,"data-command":"approve"},g?"Approve on github.com":"Approve"):null,s.createElement("input",{id:"reply",value:"Comment",type:"submit",className:"secondary",disabled:xe||!l})))}o(Ai,"AddComment");const ur={comment:"Comment and Submit",approve:"Approve and Submit",requestChanges:"Request Changes and Submit"},tl=o(l=>{const{updatePR:a,requestChanges:d,approve:f,submit:h,openOnGitHub:g}=useContext(PullRequestContext),b=useRef();async function R(ve){const{value:se}=b.current;if(l.continueOnGitHub&&ve!==ReviewType.Comment){await g();return}switch(ve){case ReviewType.RequestChanges:await d(se);break;case ReviewType.Approve:await f(se);break;default:await h(se)}a({pendingCommentText:"",pendingReviewType:void 0})}o(R,"submitAction");const F=o(ve=>{a({pendingCommentText:ve.target.value})},"onChangeTextarea"),ce=l.isAuthor?{comment:"Comment and Submit"}:l.continueOnGitHub?{comment:"Comment and Submit",approve:"Approve on github.com",requestChanges:"Request changes on github.com"}:ur;return React.createElement("span",{className:"comment-form"},React.createElement("textarea",{id:"comment-textarea",name:"body",placeholder:"Leave a comment",ref:b,value:l.pendingCommentText,onChange:F}),React.createElement(Dropdown,{options:ce,defaultOption:"comment",submitAction:R}))},"AddCommentSimple");function Fi({canEdit:l,state:a,head:d,base:f,title:h,number:g,url:b,author:R,isCurrentlyCheckedOut:F,isDraft:ce,isIssue:ve,repositoryDefaultBranch:se}){const[Ve,xe]=Fe(h),[Oe,De]=(0,s.useState)(!1);return s.createElement(s.Fragment,null,s.createElement($i,{title:Ve,number:g,url:b,inEditMode:Oe,setEditMode:De,setCurrentTitle:xe}),s.createElement(zi,{state:a,head:d,base:f,author:R,isIssue:ve,isDraft:ce}),s.createElement(Ar,{isCurrentlyCheckedOut:F,isIssue:ve,canEdit:l,repositoryDefaultBranch:se,setEditMode:De}))}o(Fi,"Header");function $i({title:l,number:a,url:d,inEditMode:f,setEditMode:h,setCurrentTitle:g}){const{setTitle:b}=(0,s.useContext)(j);return f?s.createElement("form",{className:"editing-form title-editing-form",onSubmit:async ve=>{ve.preventDefault();try{const se=ve.target[0].value;await b(se),g(se)}finally{h(!1)}}},s.createElement("input",{type:"text",style:{width:"100%"},defaultValue:l}),s.createElement("div",{className:"form-actions"},s.createElement("button",{className:"secondary",onClick:()=>h(!1)},"Cancel"),s.createElement("input",{type:"submit",value:"Update"}))):s.createElement("div",{className:"overview-title"},s.createElement("h2",null,l," ",s.createElement("a",{href:d,title:d},"#",a)))}o($i,"Title");function Ar({isCurrentlyCheckedOut:l,canEdit:a,isIssue:d,repositoryDefaultBranch:f,setEditMode:h}){const{refresh:g,copyPrLink:b,copyVscodeDevLink:R}=(0,s.useContext)(j);return s.createElement("div",{className:"button-group"},s.createElement(Fr,{isCurrentlyCheckedOut:l,isIssue:d,repositoryDefaultBranch:f}),s.createElement("button",{title:"Refresh with the latest data from GitHub",onClick:g,className:"secondary small-button"},"Refresh"),a&&s.createElement(s.Fragment,null,s.createElement("button",{title:"Rename",onClick:h,className:"secondary small-button"},"Rename"),s.createElement("button",{title:"Copy GitHub pull request link",onClick:b,className:"secondary small-button"},"Copy Link"),s.createElement("button",{title:"Copy vscode.dev link for viewing this pull request in VS Code for the Web",onClick:R,className:"secondary small-button"},"Copy vscode.dev Link")))}o(Ar,"ButtonGroup");function zi({state:l,isDraft:a,isIssue:d,author:f,base:h,head:g}){return s.createElement("div",{className:"subtitle"},s.createElement("div",{id:"status"},ji(l,a)),s.createElement("div",{className:"author"},d?null:s.createElement(it,{for:f}),d?null:s.createElement("div",{className:"merge-branches"},s.createElement(wt,{for:f})," ",$r(l)," into"," ",s.createElement("code",{className:"branch-tag"},h)," from ",s.createElement("code",{className:"branch-tag"},g))))}o(zi,"Subtitle");const Fr=o(({isCurrentlyCheckedOut:l,isIssue:a,repositoryDefaultBranch:d})=>{const{exitReviewMode:f,checkout:h}=(0,s.useContext)(j),[g,b]=(0,s.useState)(!1),R=o(async F=>{try{switch(b(!0),F){case"checkout":await h();break;case"exitReviewMode":await f();break;default:throw new Error(`Can't find action ${F}`)}}finally{b(!1)}},"onClick");return l?s.createElement(s.Fragment,null,s.createElement("button",{"aria-live":"polite",className:"checkedOut small-button",disabled:!0},ge," Checked Out"),s.createElement("button",{"aria-live":"polite",title:"Switch to a different branch than this pull request branch",disabled:g,className:"small-button",onClick:()=>R("exitReviewMode")},"Checkout '",d,"'")):a?null:s.createElement("button",{"aria-live":"polite",title:"Checkout a local copy of this pull request branch to verify or edit changes",disabled:g,className:"small-button",onClick:()=>R("checkout")},"Checkout")},"CheckoutButtons");function ji(l,a){return l===ne.Merged?"Merged":l===ne.Open?a?"Draft":"Open":"Closed"}o(ji,"getStatus");function $r(l){return l===ne.Merged?"merged changes":"wants to merge changes"}o($r,"getActionText");function pt(l){const{reviewer:a,state:d}=l;return s.createElement("div",{className:"section-item reviewer"},s.createElement("div",{className:"avatar-with-author"},s.createElement(it,{for:a}),s.createElement(wt,{for:a})),s.createElement("div",{className:"reviewer-icons"},Rt[d]))}o(pt,"Reviewer");const Rt={REQUESTED:(0,s.cloneElement)(_t,{className:"section-icon",title:"Awaiting requested review"}),COMMENTED:(0,s.cloneElement)(Zn,{className:"section-icon",Root:"div",title:"Left review comments"}),APPROVED:(0,s.cloneElement)(ge,{className:"section-icon",title:"Approved these changes"}),CHANGES_REQUESTED:(0,s.cloneElement)(bi,{className:"section-icon",title:"Requested changes"})},Ot=o(({updateState:l,allowAutoMerge:a,defaultMergeMethod:d,mergeMethodsAvailability:f,autoMerge:h,isDraft:g})=>{if(!a&&!h||!f||!d)return null;const b=s.useRef();return s.createElement("div",{className:"automerge-section"},s.createElement("div",{className:"automerge-checkbox-wrapper"},s.createElement("input",{id:"automerge-checkbox",type:"checkbox",name:"automerge",checked:h,disabled:!a||g,onChange:()=>{var R;return l({autoMerge:!h,autoMergeMethod:(R=b.current)==null?void 0:R.value})}})),s.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},"Auto-merge"),s.createElement("div",{className:"merge-select-container"},s.createElement(Hr,{ref:b,defaultMergeMethod:d,mergeMethodsAvailability:f,onChange:()=>{var R;l({autoMergeMethod:(R=b.current)==null?void 0:R.value})}})))},"AutoMerge"),Dt=o(({pr:l,isSimple:a})=>l.state===ne.Merged?s.createElement("div",{className:"branch-status-message"},s.createElement("div",{className:"branch-status-icon"},a?Ge:null)," ","Pull request successfully merged."):l.state===ne.Closed?s.createElement("div",{className:"branch-status-message"},"This pull request is closed."):null,"PRStatusMessage"),bn=o(({pr:l})=>l.state===ne.Open?null:s.createElement(Vi,{...l}),"DeleteOption"),Sn=o(({pr:l})=>{const{state:a,status:d}=l,[f,h]=(0,s.useReducer)(g=>!g,d.statuses.some(g=>g.state==="failure"));return(0,s.useEffect)(()=>{d.statuses.some(g=>g.state==="failure")?f||h():f&&h()},d.statuses),a===ne.Open&&d.statuses.length?s.createElement(s.Fragment,null,s.createElement("div",{className:"status-section"},s.createElement("div",{className:"status-item"},s.createElement(dr,{state:d.state}),s.createElement("p",{className:"status-item-detail-text"},ll(d.statuses)),s.createElement("button",{id:"status-checks-display-button",className:"secondary small-button",onClick:h},f?"Hide":"Show")),f?s.createElement(Vr,{statuses:d.statuses}):null)):null},"StatusChecks"),Tn=o(({pr:l,isSimple:a})=>a&&l.state===ne.Open&&l.reviewers?s.createElement(s.Fragment,null," ",l.reviewers.map(d=>s.createElement(pt,{key:d.reviewer.login,...d,canDelete:!1}))):null,"InlineReviewers"),zr=o(({pr:l,isSimple:a})=>l.isIssue?null:s.createElement("div",{id:"status-checks"},s.createElement(s.Fragment,null,s.createElement(Dt,{pr:l,isSimple:a}),s.createElement(Sn,{pr:l}),s.createElement(Tn,{pr:l,isSimple:a}),s.createElement(nl,{pr:l,isSimple:a}),s.createElement(bn,{pr:l}))),"StatusChecksSection"),nl=o(({pr:l,isSimple:a})=>{if(a&&l.state!==ne.Open){const{create:b}=(0,s.useContext)(j),R="Create New Pull Request...";return s.createElement("div",{className:"branch-status-container"},s.createElement("form",null,s.createElement("button",{type:"submit",onClick:b},R)))}else if(l.state!==ne.Open)return null;const{mergeable:d}=l,[f,h]=(0,s.useState)(d);d!==f&&d!==ie.Unknown&&h(d);const{checkMergeability:g}=(0,s.useContext)(j);return(0,s.useEffect)(()=>{const b=setInterval(async()=>{if(f===ie.Unknown){const R=await g();h(R)}},3e3);return()=>clearInterval(b)},[f]),s.createElement("span",null,s.createElement(jr,{mergeable:f,isSimple:a}),s.createElement(rl,{pr:{...l,mergeable:f},isSimple:a}))},"MergeStatusAndActions"),ds=null,jr=o(({mergeable:l,isSimple:a})=>s.createElement("div",{className:"status-item status-section"},a?null:l===ie.Mergeable?ge:l===ie.NotMergeable||l===ie.Conflict?yn:_t,s.createElement("p",null,l===ie.Mergeable?"This branch has no conflicts with the base branch.":l===ie.Conflict?"This branch has conflicts that must be resolved.":l===ie.NotMergeable?"Branch protection policy must be fulfilled before merging.":"Checking if this branch can be merged...")),"MergeStatus"),Hi=o(({isSimple:l})=>{const[a,d]=(0,s.useState)(!1),{readyForReview:f,updatePR:h}=(0,s.useContext)(j),g=(0,s.useCallback)(async()=>{try{d(!0),await f(),h({isDraft:!1})}finally{d(!1)}},[d,f,h]);return s.createElement("div",{className:"ready-for-review-container"},s.createElement("div",{className:"select-control"},s.createElement("button",{className:"ready-for-review-button",disabled:a,onClick:g},"Ready for review")),l?"":s.createElement("div",{className:"ready-for-review-icon"},rt),s.createElement("p",{className:"ready-for-review-heading"},"This pull request is still a work in progress."),s.createElement("p",{className:"ready-for-review-meta"},"Draft pull requests cannot be merged."))},"ReadyForReview"),Nn=o(l=>{const a=(0,s.useRef)(),[d,f]=(0,s.useState)(null);return d?s.createElement(ol,{pr:l,method:d,cancel:()=>f(null)}):s.createElement("div",{className:"automerge-section wrapper"},s.createElement("button",{onClick:()=>f(a.current.value)},"Merge Pull Request"),Je,"using method",Je,s.createElement(Hr,{ref:a,...l}))},"Merge"),rl=o(({pr:l,isSimple:a})=>{var d;const{hasWritePermission:f,canEdit:h,isDraft:g,mergeable:b,continueOnGitHub:R}=l;if(R)return h?s.createElement(il,null):null;if(g)return h?s.createElement(Hi,{isSimple:a}):null;if(b===ie.Mergeable&&f)return a?s.createElement(cr,{...l}):s.createElement(Nn,{...l});if(f){const F=(0,s.useContext)(j);return s.createElement(Ot,{updateState:ce=>{F.updateAutoMerge(ce)},...l,defaultMergeMethod:(d=l.autoMergeMethod)!=null?d:l.defaultMergeMethod})}return null},"PrActions"),il=o(()=>{const{openOnGitHub:l}=(0,s.useContext)(j);return s.createElement("button",{id:"merge-on-github",type:"submit",onClick:()=>l()},"Merge on github.com")},"MergeOnGitHub"),cr=o(l=>{const{merge:a,updatePR:d}=(0,s.useContext)(j);async function f(g){const{state:b}=await a({title:"",description:"",method:g});d({state:b})}o(f,"submitAction");const h=Object.keys(Ln).filter(g=>l.mergeMethodsAvailability[g]).reduce((g,b)=>(g[b]=Ln[b],g),{});return s.createElement(Tr,{options:h,defaultOption:l.defaultMergeMethod,submitAction:f})},"MergeSimple"),Vi=o(l=>{const{deleteBranch:a}=(0,s.useContext)(j),[d,f]=(0,s.useState)(!1);return l.isRemoteHeadDeleted!==!1&&l.isLocalHeadDeleted!==!1?s.createElement("div",null):s.createElement("div",{className:"branch-status-container"},s.createElement("form",{onSubmit:async h=>{h.preventDefault();try{f(!0);const g=await a();g&&g.cancelled&&f(!1)}finally{f(!1)}}},s.createElement("button",{disabled:d,className:"secondary",type:"submit"},"Delete branch...")))},"DeleteBranch");function ol({pr:l,method:a,cancel:d}){const{merge:f,updatePR:h}=(0,s.useContext)(j),[g,b]=(0,s.useState)(!1);return s.createElement("div",null,s.createElement("form",{onSubmit:async R=>{R.preventDefault();try{b(!0);const{title:F,description:ce}=R.target,{state:ve}=await f({title:F.value,description:ce.value,method:a});h({state:ve})}finally{b(!1)}}},s.createElement("input",{type:"text",name:"title",defaultValue:Mn(a,l)}),s.createElement("textarea",{name:"description",defaultValue:Bi(a,l)}),s.createElement("div",{className:"form-actions"},s.createElement("button",{className:"secondary",onClick:d},"Cancel"),s.createElement("input",{disabled:g,type:"submit",id:"confirm-merge",value:Ln[a]}))))}o(ol,"ConfirmMerge");function Mn(l,a){switch(l){case"merge":return`Merge pull request #${a.number} from ${a.head}`;case"squash":return`${a.title} (#${a.number})`;default:return""}}o(Mn,"getDefaultTitleText");function Bi(l,a){return l==="merge"?a.title:""}o(Bi,"getDefaultDescriptionText");const Ln={merge:"Create Merge Commit",squash:"Squash and Merge",rebase:"Rebase and Merge"},Hr=s.forwardRef(({defaultMergeMethod:l,mergeMethodsAvailability:a,onChange:d},f)=>s.createElement("select",{ref:f,defaultValue:l,onChange:d,"aria-label":"Select merge method"},Object.entries(Ln).map(([h,g])=>s.createElement("option",{key:h,value:h,disabled:!a[h]},g,a[h]?null:" (not enabled)")))),Vr=o(({statuses:l})=>s.createElement("div",null,l.map(a=>s.createElement("div",{key:a.id,className:"status-check"},s.createElement("div",{className:"status-check-details"},s.createElement(dr,{state:a.state}),s.createElement(it,{for:{avatarUrl:a.avatar_url,url:a.url}}),s.createElement("span",{className:"status-check-detail-text"},a.context," ",a.description?`\u2014 ${a.description}`:"")),a.target_url?s.createElement("a",{href:a.target_url,title:a.target_url},"Details"):null))),"StatusCheckDetails");function ll(l){const a=Ri(l,f=>f.state),d=[];for(const f of Object.keys(a)){const h=a[f].length;let g="";switch(f){case"success":g="successful";break;case"failure":g="failed";break;case"neutral":g="skipped";break;default:g="pending"}const b=h>1?`${h} ${g} checks`:`${h} ${g} check`;d.push(b)}return d.join(" and ")}o(ll,"getSummaryLabel");function dr({state:l}){switch(l){case"neutral":return Ne;case"success":return ge;case"failure":return yn}return _t}o(dr,"StateIcon");function Ui({reviewers:l,labels:a,hasWritePermission:d,isIssue:f,milestone:h,assignees:g}){const{addReviewers:b,addAssignees:R,addAssigneeYourself:F,addLabels:ce,addMilestone:ve,updatePR:se,pr:Ve}=(0,s.useContext)(j);return s.createElement("div",{id:"sidebar"},f?"":s.createElement("div",{id:"reviewers",className:"section"},s.createElement("div",{className:"section-header"},s.createElement("div",{className:"section-title"},"Reviewers"),d?s.createElement("button",{className:"icon-button",title:"Add Reviewers",onClick:async()=>{const xe=await b();se({reviewers:xe.reviewers})}},wn):null),l&&l.length?l.map(xe=>s.createElement(pt,{key:xe.reviewer.login,...xe,canDelete:d})):s.createElement("div",{className:"section-placeholder"},"None yet")),s.createElement("div",{id:"assignees",className:"section"},s.createElement("div",{className:"section-header"},s.createElement("div",{className:"section-title"},"Assignees"),d?s.createElement("button",{className:"icon-button",title:"Add Assignees",onClick:async()=>{const xe=await R();se({assignees:xe.assignees})}},wn):null),g&&g.length?g.map((xe,Oe)=>s.createElement("div",{key:Oe,className:"section-item reviewer"},s.createElement("div",{className:"avatar-with-author"},s.createElement(it,{for:xe}),s.createElement(wt,{for:xe})))):s.createElement("div",{className:"section-placeholder"},"None yet",Ve.canEdit?s.createElement(s.Fragment,null,"\u2014",s.createElement("a",{className:"assign-yourself",onClick:async()=>{const xe=await F();se({assignees:xe.assignees})}},"assign yourself")):null)),s.createElement("div",{id:"labels",className:"section"},s.createElement("div",{className:"section-header"},s.createElement("div",{className:"section-title"},"Labels"),d?s.createElement("button",{className:"icon-button",title:"Add Labels",onClick:async()=>{const xe=await ce();se({labels:Ve.labels.concat(xe.added)})}},wn):null),a.length?s.createElement("div",{className:"labels-list"},a.map(xe=>s.createElement(Br,{key:xe.name,...xe,canDelete:d}))):s.createElement("div",{className:"section-placeholder"},"None yet")),s.createElement("div",{id:"milestone",className:"section"},s.createElement("div",{className:"section-header"},s.createElement("div",{className:"section-title"},"Milestone"),d?s.createElement("button",{className:"icon-button",title:"Add Milestone",onClick:async()=>{const xe=await ve();se({milestone:xe.added})}},wn):null),h?s.createElement(sl,{key:h.title,...h,canDelete:d}):s.createElement("div",{className:"section-placeholder"},"No milestone")))}o(Ui,"Sidebar");function Br(l){const{name:a,canDelete:d,color:f}=l,{removeLabel:h,pr:g}=(0,s.useContext)(j),b=Rr(f,g.isDarkTheme,!1);return s.createElement("div",{className:"section-item label",style:{backgroundColor:b.backgroundColor,color:b.textColor,borderColor:`${b.borderColor}`}},a,d?s.createElement("button",{className:"icon-button",onClick:()=>h(a)},yn,"\uFE0F"):null)}o(Br,"Label");function sl(l){const{removeMilestone:a,updatePR:d,pr:f}=(0,s.useContext)(j),h=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),g=Rr(h,f.isDarkTheme,!1),{canDelete:b,title:R}=l;return s.createElement("div",{className:"labels-list"},s.createElement("div",{className:"section-item label",style:{backgroundColor:g.backgroundColor,color:g.textColor,borderColor:`${g.borderColor}`}},R,b?s.createElement("button",{className:"icon-button",onClick:async()=>{await a(),d({milestone:null})}},yn,"\uFE0F"):null))}o(sl,"Milestone");var Wi;(function(l){l[l.ADD=0]="ADD",l[l.COPY=1]="COPY",l[l.DELETE=2]="DELETE",l[l.MODIFY=3]="MODIFY",l[l.RENAME=4]="RENAME",l[l.TYPE=5]="TYPE",l[l.UNKNOWN=6]="UNKNOWN",l[l.UNMERGED=7]="UNMERGED"})(Wi||(Wi={}));class fr{constructor(a,d,f,h,g,b,R){this.baseCommit=a,this.status=d,this.fileName=f,this.previousFileName=h,this.patch=g,this.diffHunks=b,this.blobUrl=R}}o(fr,"file_InMemFileChange");class $e{constructor(a,d,f,h,g){this.baseCommit=a,this.blobUrl=d,this.status=f,this.fileName=h,this.previousFileName=g}}o($e,"file_SlimFileChange");var Pn=Object.defineProperty,al=o((l,a,d)=>(typeof a!="symbol"&&(a+=""),a in l?Pn(l,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[a]=d),"diffHunk_publicField"),Ur;(function(l){l[l.Context=0]="Context",l[l.Add=1]="Add",l[l.Delete=2]="Delete",l[l.Control=3]="Control"})(Ur||(Ur={}));class nn{constructor(a,d,f,h,g,b=!0){this.type=a,this.oldLineNumber=d,this.newLineNumber=f,this.positionInHunk=h,this._raw=g,this.endwithLineBreak=b}get raw(){return this._raw}get text(){return this._raw.substr(1)}}o(nn,"DiffLine");function Wr(l){switch(l[0]){case" ":return 0;case"+":return 1;case"-":return 2;default:return 3}}o(Wr,"getDiffChangeType");class rn{constructor(a,d,f,h,g){this.oldLineNumber=a,this.oldLength=d,this.newLineNumber=f,this.newLength=h,this.positionInHunk=g,al(this,"diffLines",[])}}o(rn,"DiffHunk");const Qi=/^@@ \-(\d+)(,(\d+))?( \+(\d+)(,(\d+)?)?)? @@/;function Ki(l){let a=0,d=0;for(;(d=l.indexOf("\r",d))!==-1;)d++,a++;return a}o(Ki,"countCarriageReturns");function*Zi(l){let a=0;for(;a!==-1&&a<l.length;){const d=a;a=l.indexOf(`
`,a);let h=(a!==-1?a:l.length)-d;a!==-1&&(a>0&&l[a-1]==="\r"&&h--,a++),yield l.substr(d,h)}}o(Zi,"LineReader");function*Yi(l){const a=Zi(l);let d=a.next(),f,h=-1,g=-1,b=-1;for(;!d.done;){const R=d.value;if(Qi.test(R)){f&&(yield f,f=void 0),h===-1&&(h=0);const F=Qi.exec(R),ce=g=Number(F[1]),ve=Number(F[3])||1,se=b=Number(F[5]),Ve=Number(F[7])||1;f=new rn(ce,ve,se,Ve,h),f.diffLines.push(new nn(3,-1,-1,h,R))}else if(f){const F=Wr(R);if(F===3)f.diffLines&&f.diffLines.length&&(f.diffLines[f.diffLines.length-1].endwithLineBreak=!1);else{f.diffLines.push(new nn(F,F!==1?g:-1,F!==2?b:-1,h,R));const ce=1+Ki(R);switch(F){case 0:g+=ce,b+=ce;break;case 2:g+=ce;break;case 1:b+=ce;break}}}h!==-1&&++h,d=a.next()}f&&(yield f)}o(Yi,"parseDiffHunk");function Qr(l){const a=Yi(l);let d=a.next();const f=[],h=[];for(;!d.done;){const g=d.value;f.push(g);for(let b=0;b<g.diffLines.length;b++){const R=g.diffLines[b];if(!(R.type===2||R.type===3))if(R.type===1)h.push(R.text);else{const F=R.text;h.push(F)}}d=a.next()}return f}o(Qr,"parsePatch");function qi(l,a){const d=l.split(/\r?\n/),f=Yi(a);let h=f.next();const g=[],b=[];let R=0;for(;!h.done;){const F=h.value;g.push(F);const ce=F.oldLineNumber;for(let ve=R+1;ve<ce;ve++)b.push(d[ve-1]);R=ce+F.oldLength-1;for(let ve=0;ve<F.diffLines.length;ve++){const se=F.diffLines[ve];if(!(se.type===2||se.type===3))if(se.type===1)b.push(se.text);else{const Ve=se.text;b.push(Ve)}}h=f.next()}if(R<d.length)for(let F=R+1;F<=d.length;F++)b.push(d[F-1]);return b.join(`
`)}o(qi,"getModifiedContentFromDiffHunk");function Xi(l){switch(l){case"removed":return GitChangeType.DELETE;case"added":return GitChangeType.ADD;case"renamed":return GitChangeType.RENAME;case"modified":return GitChangeType.MODIFY;default:return GitChangeType.UNKNOWN}}o(Xi,"getGitChangeType");async function It(l,a){const d=[];for(let f=0;f<l.length;f++){const h=l[f],g=Xi(h.status);if(!h.patch&&!(g===GitChangeType.ADD&&h.additions===0)){d.push(new SlimFileChange(a,h.blob_url,g,h.filename,h.previous_filename));continue}const b=h.patch?Qr(h.patch):[];d.push(new InMemFileChange(a,g,h.filename,h.previous_filename,h.patch,b,h.blob_url))}return d}o(It,"parseDiff");function mr({hunks:l}){return s.createElement("div",{className:"diff"},l.map((a,d)=>s.createElement(Gi,{key:d,hunk:a})))}o(mr,"Diff");const Kr=mr,Gi=o(({hunk:l,maxLines:a=8})=>s.createElement(s.Fragment,null,l.diffLines.slice(-a).map(d=>s.createElement("div",{key:Ji(d),className:`diffLine ${eo(d.type)}`},s.createElement(Zr,{num:d.oldLineNumber}),s.createElement(Zr,{num:d.newLineNumber}),s.createElement("span",{className:"diffTypeSign"},d._raw.substr(0,1)),s.createElement("span",{className:"lineContent"},d._raw.substr(1))))),"Hunk"),Ji=o(l=>`${l.oldLineNumber}->${l.newLineNumber}`,"keyForDiffLine"),Zr=o(({num:l})=>s.createElement("span",{className:"lineNumber"},l>0?l:" "),"LineNumber"),eo=o(l=>Ur[l].toLowerCase(),"getDiffChangeClass"),Yr=o(({events:l})=>s.createElement(s.Fragment,null,l.map(a=>{switch(a.event){case q.Committed:return s.createElement(to,{key:`commit${a.id}`,...a});case q.Reviewed:return s.createElement(ti,{key:`review${a.id}`,...a});case q.Commented:return s.createElement(ro,{key:`comment${a.id}`,...a});case q.Merged:return s.createElement(ni,{key:`merged${a.id}`,...a});case q.Assigned:return s.createElement(pr,{key:`assign${a.id}`,...a});case q.HeadRefDeleted:return s.createElement(At,{key:`head${a.id}`,...a});case q.NewCommitsSinceReview:return s.createElement(qr,{key:`newCommits${a.id}`});default:throw new Jn(a)}})),"Timeline"),ul=null,to=o(l=>s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},mt,Je,s.createElement("div",{className:"avatar-container"},s.createElement(it,{for:l.author})),s.createElement(wt,{for:l.author}),s.createElement("div",{className:"message-container"},s.createElement("a",{className:"message",href:l.htmlUrl,title:l.htmlUrl},l.message))),s.createElement("div",{className:"sha-with-timestamp"},s.createElement("a",{className:"sha",href:l.htmlUrl,title:l.htmlUrl},l.sha.slice(0,7)),s.createElement(_n,{date:l.authoredDate}))),"CommitEventView"),qr=o(()=>{const{gotoChangesSinceReview:l}=(0,s.useContext)(j);return s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},Xt,Je,s.createElement("span",{style:{fontWeight:"bold"}},"New changes since your last Review")),s.createElement("button",{"aria-live":"polite",title:"View the changes since your last review",onClick:()=>l()},"View Changes"))},"NewCommitsSinceReviewEventView"),Xr=o(({authorAssociation:l},a=d=>`(${d.toLowerCase()})`)=>l.toLowerCase()==="user"?a("you"):l&&l!=="NONE"?a(l):null,"association"),Gr=o(l=>l.position!==null?`pos:${l.position}`:`ori:${l.originalPosition}`,"positionKey"),Jr=o(l=>Ri(l,a=>a.path+":"+Gr(a)),"groupCommentsByPath"),no={PENDING:"will review",COMMENTED:"reviewed",CHANGES_REQUESTED:"requested changes",APPROVED:"approved"},ei=o(l=>no[l]||"reviewed","reviewDescriptor"),ti=o(l=>{const a=Jr(l.comments),d=l.state.toLocaleUpperCase()==="PENDING";return s.createElement("div",{id:d?"pending-review":null,className:"comment-container comment"},s.createElement("div",{className:"review-comment-container"},s.createElement("div",{className:"review-comment-header"},s.createElement(Xn,null,s.createElement(it,{for:l.user}),s.createElement(wt,{for:l.user}),Xr(l),d?s.createElement("em",null,"review pending"):s.createElement(s.Fragment,null,ei(l.state),Je,s.createElement(_n,{href:l.htmlUrl,date:l.submittedAt})))),l.state!=="PENDING"&&l.body?s.createElement(ar,{body:l.body,bodyHTML:l.bodyHTML,canApplyPatch:!1}):null,l.comments.length?s.createElement("div",{className:"comment-body review-comment-body"},Object.entries(a).map(([f,h])=>s.createElement(cl,{key:f,thread:h,event:l}))):null,d?s.createElement(on,null):null))},"ReviewEventView");function cl({thread:l,event:a}){const d=l[0],[f,h]=(0,s.useState)(!d.isResolved),[g,b]=(0,s.useState)(!!d.isResolved),{openDiff:R,toggleResolveComment:F}=(0,s.useContext)(j),ce=a.reviewThread&&(a.reviewThread.canResolve&&!a.reviewThread.isResolved||a.reviewThread.canUnresolve&&a.reviewThread.isResolved),ve=o(()=>{if(a.reviewThread){const se=!g;h(!se),b(se),F(a.reviewThread.threadId,l,se)}},"toggleResolve");return s.createElement("div",{key:a.id,className:"diff-container"},s.createElement("div",{className:"resolved-container"},s.createElement("div",null,d.position===null?s.createElement("span",null,s.createElement("span",null,d.path),s.createElement("span",{className:"outdatedLabel"},"Outdated")):s.createElement("a",{className:"diffPath",onClick:()=>R(d)},d.path),!g&&!f?s.createElement("span",{className:"unresolvedLabel"},"Unresolved"):null),s.createElement("button",{className:"secondary",onClick:()=>h(!f)},f?"Hide":"Show")),f?s.createElement("div",null,s.createElement(Kr,{hunks:d.diffHunks}),l.map(se=>s.createElement(Wt,{key:se.id,...se,pullRequestReviewId:a.id})),ce?s.createElement("div",{className:"resolve-comment-row"},s.createElement("button",{className:"secondary comment-resolve",onClick:()=>ve()},g?"Unresolve Conversation":"Resolve Conversation")):null):null)}o(cl,"CommentThread");function on(){const{requestChanges:l,approve:a,submit:d,pr:f}=(0,s.useContext)(j),{isAuthor:h}=f,g=(0,s.useRef)();return s.createElement("div",{className:"comment-form"},s.createElement("textarea",{ref:g,placeholder:"Leave a review summary comment"}),s.createElement("div",{className:"form-actions"},h?null:s.createElement("button",{id:"request-changes",className:"push-right",onClick:()=>l(g.current.value)},"Request Changes"),h?null:s.createElement("button",{id:"approve",onClick:()=>a(g.current.value)},"Approve"),s.createElement("button",{id:"submit",className:h?"push-right":"",onClick:()=>d(g.current.value)},"Submit Review")))}o(on,"AddReviewSummaryComment");const ro=o(l=>s.createElement(Wt,{headerInEditMode:!0,...l}),"CommentEventView"),ni=o(l=>s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},Ge,Je,s.createElement("div",{className:"avatar-container"},s.createElement(it,{for:l.user})),s.createElement(wt,{for:l.user}),s.createElement("div",{className:"message"},"merged commit",Je,s.createElement("a",{className:"sha",href:l.commitUrl,title:l.commitUrl},l.sha.substr(0,7)),Je,"into ",l.mergeRef,Je),s.createElement(_n,{href:l.url,date:l.createdAt}))),"MergedEventView"),At=o(l=>s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},s.createElement("div",{className:"avatar-container"},s.createElement(it,{for:l.actor})),s.createElement(wt,{for:l.actor}),s.createElement("div",{className:"message"},"deleted the ",l.headRef," branch",Je),s.createElement(_n,{date:l.createdAt}))),"HeadDeleteEventView"),pr=o(l=>null,"AssignEventView"),Rn=o(l=>s.createElement(s.Fragment,null,s.createElement("div",{id:"title",className:"title"},s.createElement("div",{className:"details"},s.createElement(Fi,{...l}))),s.createElement(Ui,{...l}),s.createElement("div",{id:"main"},s.createElement("div",{id:"description"},s.createElement(Wt,{isPRDescription:!0,...l})),s.createElement(Yr,{events:l.events}),s.createElement(zr,{pr:l,isSimple:!1}),s.createElement(Ai,{...l}))),"Overview");function On(){window.addEventListener("contextmenu",l=>{l.stopImmediatePropagation()},!0),(0,B.render)(s.createElement(Dn,null,l=>s.createElement(Rn,{...l})),document.getElementById("app"))}o(On,"main");function Dn({children:l}){const a=(0,s.useContext)(j),[d,f]=(0,s.useState)(a.pr);return(0,s.useEffect)(()=>{a.onchange=f,f(a.pr)},[]),a.postMessage({command:"ready"}),a.postMessage({command:"pr.debug",args:"initialized "+(d?"with PR":"without PR")}),d?l(d):s.createElement("div",{className:"loading-indicator"},"Loading...")}o(Dn,"Root"),addEventListener("load",On)})()})();
