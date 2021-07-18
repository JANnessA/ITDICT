import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {Rect} from 'react-native-svg';

export function SearchIcon(props) {
  return (
    <Svg
      height={props.height}
      viewBox="0 0 515.558 515.558"
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill={props.color ? props.color : 'black'}
        d="M378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333C418.889 93.963 324.928.002 209.444.002S0 93.963 0 209.447s93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564L378.344 332.78zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"
      />
    </Svg>
  );
}

export function SquareIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}>
      <Path
        d="M416 448H96a32.09 32.09 0 01-32-32V96a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v320a32.09 32.09 0 01-32 32z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export function BackIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}>
      <Path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M328 112L184 256l144 144"
      />
    </Svg>
  );
}

export function StarIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}>
      <Path
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        fill={props.fill ? props.fill : 'none'}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export function SpeakerIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}>
      <Path
        d="M126 192H56a8 8 0 00-8 8v112a8 8 0 008 8h69.65a15.93 15.93 0 0110.14 3.54l91.47 74.89A8 8 0 00240 392V120a8 8 0 00-12.74-6.43l-91.47 74.89A15 15 0 01126 192zm194 128c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160"
        fill={props.fill ? props.fill : 'none'}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export function ArrowIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}>
      <Path
        fill={'#386db5'}
        d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z"
      />
    </Svg>
  );
}

export function LearnIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}>
      <Path
        d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
        fill="#000"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Rect
        x={176}
        y={32}
        width={props.width}
        height={props.height}
        rx={26.13}
        ry={26.13}
        fill={props.color ? props.color : 'none'}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export function LogoDict(props) {
  return (
    <Svg
      height={props.height}
      viewBox="0 0 64 64"
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G data-name="Filled outline">
        <Path d="M3 57a4 4 0 014-4h48V3H9a6 6 0 00-6 6z" fill="#2d75bb" />
        <Path
          d="M15 9h34v18H15zM7 53h48v8H7a4 4 0 01-4-4 4 4 0 014-4z"
          fill="#fcec97"
        />
        <Path
          d="M6 56h6v2H6zM20 56h35v2H20zM3 57a4 4 0 014-4h2V3a6 6 0 00-6 6z"
          fill="#d3843d"
        />
        <Path
          d="M4 47H2a3.887 3.887 0 014-4v2a1.882 1.882 0 00-2 2zM4 42H2a3.887 3.887 0 014-4v2a1.882 1.882 0 00-2 2zM4 16H2a3.887 3.887 0 014-4v2a1.882 1.882 0 00-2 2z"
          fill="#fcec97"
        />
        <Path
          d="M28.035 24.263L25.236 14h-2.472l-2.8 10.263-1.93-.526 3-11A1 1 0 0122 12h4a1 1 0 01.965.737l3 11z"
          fill="#d3843d"
        />
        <Path d="M21 18h7v2h-7z" fill="#d3843d" />
        <Path d="M31 17h5v2h-5z" fill="#2d75bb" />
        <Path
          d="M46 24h-8a1 1 0 01-.819-1.573L43.08 14H37v-2h8a1 1 0 01.819 1.573L39.92 22H46zM20 31h24v4H20z"
          fill="#d3843d"
        />
        <G fill="#f9bb4b">
          <Path d="M17 39h4v2h-4zM23 39h18v2H23zM43 39h4v2h-4zM15 43h34v2H15zM15 47h34v2H15z" />
        </G>
        <Path d="M55 8h6v4h-6z" fill="#e4544f" />
        <Path d="M55 16h4v4h-4z" fill="#7fc99d" />
        <Path d="M55 24h6v4h-6z" fill="#e4544f" />
        <Path d="M55 32h4v4h-4z" fill="#7fc99d" />
        <Path d="M20 59l-4-2-4 2v-6h8z" fill="#e4544f" />
        <Path d="M56 3a1 1 0 00-1-1H9a7.008 7.008 0 00-7 7v48a5.006 5.006 0 005 5h48a1 1 0 001-1V37h4v-6h-4v-2h6v-6h-6v-2h4v-6h-4v-2h6V7h-6zM4 43.487V42a1.882 1.882 0 012-2v-2a4.08 4.08 0 00-2 .487V16a1.882 1.882 0 012-2v-2a4.08 4.08 0 00-2 .487V9a5.009 5.009 0 014-4.9V52H7a4.948 4.948 0 00-3 1.026V47a1.882 1.882 0 012-2v-2a4.08 4.08 0 00-2 .487zM20 60H7a3 3 0 010-6h4v2H6v2h5v1a1 1 0 001.447.9L16 58.118l3.553 1.782A1 1 0 0021 59v-1h33v2zm34-6v2H21v-2zm-41 0h6v3.382l-2.553-1.277a1 1 0 00-.894 0L13 57.382zm45-21v2h-2v-2zm2-8v2h-4v-2zm-2-8v2h-2v-2zm-4 35H10V4h44zm6-43v2h-4V9z" />
        <Path d="M26 12h-4a1 1 0 00-.965.737l-3 11 1.93.526L21.127 20h5.746l1.162 4.263 1.93-.526-3-11A1 1 0 0026 12zm-4.327 6l1.091-4h2.472l1.091 4zM31 17h5v2h-5zM45.819 13.573A1 1 0 0045 12h-8v2h6.08l-5.9 8.427A1 1 0 0038 24h8v-2h-6.08z" />
        <Path d="M14 28h36V8H14zm2-18h32v16H16zM19 36h26v-6H19zm2-4h22v2H21zM17 39h4v2h-4zM23 39h18v2H23zM43 39h4v2h-4zM15 43h34v2H15zM15 47h34v2H15z" />
      </G>
    </Svg>
  );
}
