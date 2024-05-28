import * as React from "react";
import { SvgIcon, ISvgIconProps } from "../util/react/SvgIcon";

export interface IDiGiIconProps extends ISvgIconProps {
}

export class DiGiIcon extends React.PureComponent<IDiGiIconProps> {
    render() {
        return (
            <SvgIcon {...this.props}>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path fill="#000002"
                        transform="translate(1382,598)"
                        // tslint:disable-next-line:max-line-length
                        d="m0 0c49.9-0.0459 99.8-0.0811 150-0.102 5.91-0.0025 11.8-0.00509 17.7-0.00773 1.18-5.25e-4 2.35-0.00105 3.56-0.00159 19-0.00867 37.9-0.0244 56.9-0.0429 19.5-0.0188 39-0.0298 58.5-0.0339 12-0.00273 24-0.0113 36-0.0277 8.26-0.0107 16.5-0.0137 24.8-0.0112 4.75 0.00127 9.5-5.03e-4 14.2-0.0114 17.7-0.0385 35.3 0.0817 53 1.17 1.02 0.0631 1.02 0.0631 2.06 0.127 10.3 0.653 20.4 1.74 30.5 3.62 1.49 0.266 2.98 0.531 4.47 0.796 3.79 0.679 7.57 1.39 11.4 2.1 2.21 0.412 4.43 0.809 6.65 1.2 35.8 6.34 70.7 18.8 102 38.2 1.67 1.04 1.67 1.04 3.38 2.1 13.7 8.62 26.9 17.9 39.6 27.9 0.81 0.615 1.62 1.23 2.45 1.86 7.82 5.94 15.2 12.3 21.5 19.8 1.59 1.83 3.21 3.59 4.88 5.34 7.84 8.2 14.9 16.8 21.6 25.9 1.47 1.99 2.96 3.96 4.45 5.93 6.14 8.17 11.7 16.6 17 25.4 0.938 1.54 1.91 3.06 2.88 4.58 6.11 9.8 10.4 20.6 14.9 31.2 1.15 2.67 2.32 5.32 3.51 7.98 13.7 30.9 20.8 64.6 24.8 98.1 0.179 1.33 0.358 2.66 0.537 3.99 1.64 12.6 1.82 25.2 1.78 37.9-0.00216 1.08-0.00431 2.16-0.00653 3.27-0.0537 16.8-0.575 33.2-3.31 49.9-0.199 1.22-0.397 2.44-0.602 3.7-5.17 30.8-14.4 59.6-26.4 88.3-0.505 1.22-1.01 2.43-1.53 3.68-5.04 12-10.2 23.4-17.5 34.3-0.747 1.22-1.49 2.44-2.22 3.66-9.09 15.1-19.5 29.2-31.2 42.4-1.79 2.04-3.53 4.08-5.25 6.18-1.86 2.19-3.54 3.95-5.75 5.73-4.22 3.58-8.06 7.49-11.9 11.4-5.93 5.99-12 11.5-18.7 16.6-1.25 0.992-2.5 1.98-3.75 2.98-10.6 8.37-21.8 15.9-33.2 23-0.897 0.569-0.897 0.569-1.81 1.15-25.5 16.1-56.2 27.1-85.2 34.8-0.991 0.273-0.991 0.273-2 0.552-33.8 9.2-69.4 11.5-104 12-1.78 0.0305-1.78 0.0305-3.59 0.0616-32.5 0.546-65 0.516-97.4 0.504-6.27-0.00232-12.5-0.00256-18.8-0.00148-0.906 1.53e-4 -1.81 3.06e-4 -2.75 4.64e-4 -1.84 3.2e-4 -3.69 6.44e-4 -5.53 9.73e-4 -17.1 0.00282-34.1-3.75e-4 -51.2-0.0058-14.6-0.0045-29.2-0.00366-43.8 9.19e-4 -17.1 0.00536-34.2 0.00746-51.3 0.00439-1.82-3.18e-4 -3.65-6.33e-4 -5.47-9.43e-4 -0.896-1.54e-4 -1.79-3.09e-4 -2.72-4.68e-4 -6.27-8.58e-4 -12.5 5.82e-4 -18.8 0.00295-7.63 0.00281-15.3 0.00203-22.9-0.00328-3.88-0.00261-7.76-0.00369-11.6-3.51e-4 -35.7 0.0278-35.7 0.0278-42.8-1.13-1.21-2.42-1.12-3.94-1.12-6.65-0.00337-1.48-0.00337-1.48-0.00681-2.99 0.00263-1.1 0.00525-2.19 0.00796-3.32-0.00115-1.16-0.00231-2.32-0.0035-3.52-0.0022-3.25 1.19e-4 -6.49 0.00428-9.74 0.00342-3.52 0.00107-7.04-5.77e-4 -10.6-0.00208-6.18-4.22e-4 -12.4 0.00364-18.5 0.00602-9.19 0.00634-18.4 0.00546-27.6-0.00132-15.5 0.00203-30.9 0.00802-46.4 0.00591-15.3 0.00976-30.6 0.0109-45.9 1.03e-4 -1.43 1.03e-4 -1.43 2.08e-4 -2.88 3.38e-4 -4.83 6.4e-4 -9.66 9.27e-4 -14.5 0.0021-34.2 0.00884-68.5 0.0183-103 0.00918-33.3 0.0163-66.5 0.0205-99.8 1.32e-4 -1.02 2.63e-4 -2.05 3.99e-4 -3.11 0.00132-10.3 0.00259-20.6 0.00384-30.9 0.00254-21 0.00536-41.9 0.00835-62.9 1.37e-4 -0.964 2.75e-4 -1.93 4.16e-4 -2.92 0.00921-64.4 0.0251-129 0.0419-193zm120 101c-0.165 2.74-0.262 5.46-0.316 8.21-0.0187 0.864-0.0373 1.73-0.0566 2.62-0.55 26.6-0.702 53.3-0.687 79.9 0.00154 3.05 0.00228 6.09 0.00287 9.14 0.0167 69.5 0.283 139 0.503 208 0.0431 13.7 0.0855 27.3 0.127 41 0.00299 0.975 0.00597 1.95 0.00905 2.95 0.015 4.89 0.03 9.79 0.045 14.7 0.122 40 0.247 80 0.373 120 32.7 0.0229 65.4 0.0405 98.1 0.0511 3.87 0.00125 7.75 0.00254 11.6 0.00387 1.16 3.93e-4 1.16 3.93e-4 2.34 7.95e-4 12.4 0.00433 24.9 0.0122 37.3 0.0214 12.8 0.0094 25.6 0.0149 38.4 0.0169 7.87 0.00136 15.7 0.00564 23.6 0.0138 6.07 0.00598 12.1 0.00653 18.2 0.00519 2.47 2.72e-4 4.93 0.00222 7.4 0.0061 30.1 0.269 30.1 0.269 60-2.81 1.61-0.262 1.61-0.262 3.25-0.529 42.2-7.19 80-23.8 112-52.8 0.66-0.6 1.32-1.2 2-1.82 8.06-7.35 16.1-14.7 23-23.2 0.811-0.989 1.62-1.98 2.46-3 9.44-12 16.5-25.6 23.5-39 0.462-0.872 0.924-1.74 1.4-2.64 11.1-21.3 17.9-44.9 22.6-68.4 0.315-1.54 0.315-1.54 0.637-3.12 13.3-67.9-3.72-142-42.2-199-6.88-9.96-14.8-19-23.1-27.7-1.19-1.24-2.35-2.51-3.51-3.77-26.8-28.4-65.7-45.1-103-54.6-1.19-0.307-2.37-0.614-3.6-0.93-22.6-5.14-46.5-5.52-69.6-5.43-2.66-7.94e-4 -5.33-0.00278-7.99-0.0062-6.39-0.00554-12.8 0.0045-19.2 0.0203-7.46 0.0178-14.9 0.019-22.4 0.0196-13.3 0.00168-26.6 0.0174-39.9 0.0415-12.9 0.0234-25.8 0.0374-38.7 0.041-0.798 2.23e-4 -1.6 4.46e-4 -2.42 6.75e-4 -1.61 4.43e-4 -3.22 8.85e-4 -4.82 0.00133-0.793 2.2e-4 -1.59 4.39e-4 -2.4 6.65e-4 -0.791 2.16e-4 -1.58 4.32e-4 -2.4 6.55e-4 -12.3 0.00369-24.6 0.015-37 0.0275-4.46 0.00443-8.92 0.00787-13.4 0.0106-7.7 0.00483-15.4 0.0149-23.1 0.0308-2.56 0.00454-5.12 0.00737-7.69 0.00841-3.48 0.00173-6.96 0.00959-10.4 0.0191-1.54-0.0013-1.54-0.0013-3.11-0.00263-0.924 0.00384-1.85 0.00768-2.8 0.0116-1.21 0.00187-1.21 0.00187-2.44 0.00378-1.84-0.071-1.84-0.071-2.82 1.13z"
                    />
                    <path fill="#000002"
                        transform="translate(1382,598)"
                        // tslint:disable-next-line:max-line-length
                        d="m0 0c1.44 0.845 2.88 1.69 4.32 2.53 2.91 1.7 5.81 3.42 8.71 5.14 2.38 1.41 4.76 2.78 7.17 4.13 14.5 8.13 28.6 18.6 40.1 30.5 2.36 2.37 4.88 4.53 7.41 6.71 8.09 7.02 15.8 14.3 23.4 21.9 0.955 0.934 1.91 1.87 2.87 2.8 11.8 11.7 11.8 11.7 14.9 18.3-0.384 4.26-2.81 5.99-5.94 8.75-0.498 0.44-0.996 0.881-1.51 1.33-3.8 3.34-7.71 6.53-11.7 9.65-3.65 2.88-7.26 5.82-10.9 8.76-7.66 6.23-15.3 12.4-23.1 18.5-7.69 6.03-15.3 12.2-22.8 18.4-10.4 8.63-10.4 8.63-14.1 10.6-3.27-0.388-4.81-1.47-6.99-3.88-0.538-0.588-1.08-1.18-1.63-1.78-0.838-0.942-0.838-0.942-1.69-1.9-0.578-0.637-1.16-1.27-1.75-1.93-1.65-1.83-3.3-3.67-4.94-5.51-0.736-0.824-1.47-1.65-2.23-2.5-2.08-2.35-4.14-4.71-6.09-7.18-2-2.53-3.78-4.39-6.48-6.19-3.23-2.15-5.99-4.5-8.89-7.07-12-10.4-25.6-19.1-39.3-27.1-0.642-0.377-1.28-0.754-1.94-1.14-12.3-7.17-25-13.3-38.1-18.9-0.758-0.326-1.52-0.652-2.3-0.988-65-27.5-150-28.4-216-2.23-17.4 7.31-34.1 15.9-49.9 26.2-0.744 0.483-1.49 0.966-2.26 1.46-10.2 6.72-19.3 14.2-28 22.8-1.72 1.68-3.46 3.33-5.2 4.98-7.92 7.56-14.4 15.7-20.6 24.8-0.62 0.885-0.62 0.885-1.25 1.79-5.39 7.69-10.3 15.6-14.9 23.8-0.475 0.826-0.95 1.65-1.44 2.5-1.49 2.63-2.94 5.28-4.37 7.94-0.568 1.05-1.14 2.1-1.72 3.19-4.62 8.86-7.92 17.9-10.9 27.4-0.354 1.11-0.354 1.11-0.715 2.25-8.38 26.4-13.3 52-13.1 79.8 0.00271 1 0.00542 2 0.00821 3.03 0.0659 16.1 1.11 31.5 4.43 47.3 0.166 0.871 0.332 1.74 0.503 2.64 6.55 34.3 21.4 71.9 44.5 98.4 0.875 1.04 1.75 2.08 2.62 3.13 2.77 3.31 5.57 6.6 8.38 9.87 0.706 0.821 1.41 1.64 2.14 2.49 11.7 13.3 24.1 25.6 38.9 35.5 1.5 1.01 1.5 1.01 3.02 2.04 8.88 5.91 18.1 10.9 27.7 15.6 0.748 0.371 1.5 0.742 2.27 1.12 11.1 5.5 22.2 10.6 34 14.3 0.898 0.285 1.8 0.57 2.72 0.863 17.1 5.39 34.5 8.71 52.3 11.1 0.644 0.0903 1.29 0.181 1.95 0.274 6.71 0.854 13.4 0.905 20.1 0.929 1.25 0.0057 2.5 0.0114 3.79 0.0173 2.64 0.00942 5.28 0.0163 7.92 0.0198 3.97 0.0065 7.95 0.0407 11.9 0.0723 14.4 0.0605 28.2-0.508 42.3-3.31 1.15-0.214 2.29-0.428 3.47-0.648 46.4-9.16 90.5-33.7 117-73.2 23.7-36 34.3-76.2 33.2-119-19.3-0.969-38.7-1.2-58-1.3-4.17-0.0223-8.33-0.0495-12.5-0.0761-7.84-0.0494-15.7-0.0945-23.5-0.138-8.95-0.0498-17.9-0.105-26.8-0.16-18.4-0.113-36.7-0.22-55.1-0.323-2.04-3.74-2.25-6.39-2.24-10.7-0.0019-0.662-0.0038-1.32-0.00575-2.01-0.0037-2.18 0.00699-4.37 0.0182-6.55 0.00119-1.52 0.00164-3.05 0.00139-4.57 0.00156-3.2 0.00984-6.39 0.0233-9.59 0.0169-4.08 0.0208-8.16 0.0201-12.2 2.73e-4 -3.15 0.00577-6.3 0.013-9.45 0.00317-1.5 0.00515-3.01 0.00589-4.51 0.00219-2.11 0.011-4.22 0.0216-6.33 0.00381-1.2 0.00762-2.4 0.0116-3.63 0.138-3.54 0.61-6.93 1.13-10.4 36.5-0.0229 73-0.0405 109-0.0511 4.3-0.00125 8.61-0.00255 12.9-0.00387 1.29-3.93e-4 1.29-3.93e-4 2.6-7.95e-4 13.9-0.00435 27.8-0.0122 41.7-0.0214 14.2-0.00935 28.5-0.0149 42.7-0.0169 8.79-0.00137 17.6-0.00571 26.4-0.0138 6.02-0.00528 12-0.00689 18.1-0.00558 3.48 6.42e-4 6.96-3.55e-4 10.4-0.0057 3.77-0.00495 7.54-0.00379 11.3-0.00105 1.1-0.00291 2.2-0.00583 3.34-0.00883 1.01 0.00199 2.02 0.00398 3.06 0.00603 1.3-5.7e-4 1.3-5.7e-4 2.64-0.00115 2.57 0.13 4.95 0.558 7.46 1.12 0.0229 47.4 0.0405 94.7 0.0511 142 0.00125 5.59 0.00255 11.2 0.00387 16.8 2.62e-4 1.11 5.25e-4 2.22 7.95e-4 3.37 0.00436 18 0.0122 36.1 0.0214 54.1 0.00934 18.5 0.0149 37 0.0169 55.5 0.00138 11.4 0.00573 22.8 0.0138 34.3 0.00527 7.82 0.00689 15.6 0.00558 23.5-6.44e-4 4.52 3.77e-4 9.04 0.0057 13.6 0.00483 4.13 0.00513 8.26 0.00169 12.4-4.26e-4 1.5 8.7e-4 3 0.00398 4.5 0.00396 2.03 0.00127 4.05-0.00184 6.08 5.7e-4 1.69 5.7e-4 1.69 0.00115 3.42-0.124 2.51-0.124 2.51-1.12 3.51-1.78 0.141-3.56 0.212-5.34 0.256-1.14 0.029-2.28 0.0579-3.46 0.0878-4.55 0.0844-9.1 0.157-13.7 0.204-3.46 0.0357-6.91 0.0889-10.4 0.185-3.98 0.111-7.96 0.148-11.9 0.18-1.23 0.0433-2.47 0.0866-3.74 0.131-8.38-0.0184-8.38-0.0184-11.6-2.95-1.58-2.31-2.79-4.53-3.92-7.09-0.362-0.795-0.724-1.59-1.1-2.41-0.987-2.26-1.86-4.53-2.72-6.84-0.677-1.76-1.36-3.51-2.04-5.27-0.523-1.35-0.523-1.35-1.06-2.72-1.83-4.63-3.81-9.19-5.78-13.8-0.568-1.32-0.568-1.32-1.15-2.66-1.35-3.13-2.69-6.25-4.05-9.37-0.732-1.69-1.46-3.39-2.18-5.09-0.383-0.889-0.766-1.78-1.16-2.7-0.777-2.18-0.777-2.18-0.777-5.18-4.86 1.51-7.97 4.3-11.7 7.62-1.25 1.09-2.5 2.19-3.76 3.28-0.913 0.798-0.913 0.798-1.84 1.61-18.6 16.1-40.3 29.1-62.6 39.5-1.58 0.746-3.16 1.52-4.72 2.3-10 4.87-20.5 8.28-31.1 11.7-1.43 0.462-1.43 0.462-2.89 0.934-15 4.83-29.9 9.24-45.4 12.1-1.55 0.289-1.55 0.289-3.13 0.583-13.9 2.52-27.9 3.86-42 4.67-0.719 0.0413-1.44 0.0826-2.18 0.125-53.7 2.98-105-4.92-157-21.4-3.14-1.01-6.3-1.99-9.45-2.98-12.8-4.06-24.8-8.89-36.7-15-1.17-0.6-1.17-0.6-2.37-1.21-4.79-2.46-9.56-4.97-14.3-7.53-1.54-0.83-3.08-1.66-4.62-2.48-15.4-8.21-29.9-17.4-43.4-28.5-3.86-3.17-7.8-6.02-12-8.79-6.04-4.09-11.2-8.76-16.5-13.8-2.22-2.1-4.46-4.1-6.82-6.04-2.89-2.43-5.26-5.13-7.67-8.04-2.43-2.88-5.15-5.49-7.91-8.06-4.32-4.12-7.94-8.66-11.5-13.4-2.55-3.38-5.19-6.62-7.98-9.8-35-40-53.6-92.5-63.4-144-0.223-1.15-0.445-2.3-0.674-3.48-3.98-22.1-5.39-44.3-5.28-66.8 0.0162-3.9-3.99e-6 -7.79-0.019-11.7-0.0134-16.1 1.08-31.6 3.41-47.5 0.266-1.95 0.266-1.95 0.538-3.94 3.97-28 11.4-57.4 23.5-83.1 0.369-0.797 0.738-1.59 1.12-2.42 12.6-27 29.2-52.5 47.6-76 0.427-0.547 0.855-1.09 1.29-1.66 6.3-7.96 13.2-15.3 20.3-22.5 1.42-1.42 2.82-2.84 4.23-4.27 6.17-6.18 12.6-11.8 19.4-17.2 1.13-0.935 2.26-1.87 3.38-2.82 5.78-4.86 11.6-9.65 17.6-14.2 1-0.759 2-1.52 3.04-2.3 8.53-6.35 17.5-11.5 26.9-16.6 2.96-1.62 5.88-3.32 8.79-5.02 46.6-26.6 97.3-43.4 150-51.1 0.755-0.115 1.51-0.229 2.29-0.348 83.2-12.6 174 4.58 265 51.3z"
                    />
                </g>
            </SvgIcon>
        );
    }
}
