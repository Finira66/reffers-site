<template>
  <svg
      style="position: absolute; width: 0; height: 0"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol fill="none" viewBox="0 0 50 50" id="icon-analytics">
        <path
            d="M26.767 27.817a4.59 4.59 0 01-4.585 4.585 4.59 4.59 0 01-4.585-4.585 4.59 4.59 0 014.585-4.585h1.348V11.634h-1.348C13.239 11.634 6 18.872 6 27.817 6 36.761 13.237 44 22.182 44c8.943 0 16.181-7.238 16.181-16.183V26.47H26.767v1.348zm2.571 1.349H35.6c-.68 6.805-6.438 12.137-13.418 12.137-7.436 0-13.485-6.05-13.485-13.486 0-6.98 5.332-12.74 12.136-13.419v6.262c-3.373.634-5.933 3.602-5.933 7.157 0 4.016 3.267 7.282 7.282 7.282 3.554 0 6.522-2.56 7.156-5.933zM39.26 10.74A16.076 16.076 0 0027.819 6H26.47v11.598h1.348a4.59 4.59 0 014.585 4.585v1.348H44v-1.348c0-4.323-1.683-8.387-4.74-11.443zm-4.285 10.094a7.304 7.304 0 00-5.808-5.808V8.764c6.36.635 11.435 5.709 12.07 12.07h-6.262z"
            fill="#8E259C"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 12 8" id="icon-arrow">
        <path
            d="M1 1.5l5 5 5-5"
            stroke="#0C5DD7"
            stroke-width="2"
            stroke-linecap="round"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 50 50" id="icon-balance">
        <path
            d="M45.998 9.795c-.034-1.34-.9-3.173-4.733-4.479C38.773 4.467 35.492 4 32.027 4s-6.745.467-9.237 1.316c-3.833 1.306-4.7 3.14-4.734 4.479h-.001v6.803c0 .164.012.336.04.515C10.276 17.4 4 23.99 4 32.05 4 40.294 10.563 47 18.63 47c4.083 0 7.78-1.719 10.437-4.484.967.077 1.959.117 2.96.117 3.465 0 6.746-.468 9.238-1.316C45.178 39.984 46 38.1 46 36.754V9.794h-.002zm-21.68-1.448c2.107-.637 4.846-.988 7.71-.988 2.863 0 5.601.351 7.71.988 2.006.606 2.773 1.267 2.949 1.532-.175.264-.943.926-2.95 1.532-2.108.637-4.846.987-7.71.987-2.863 0-5.602-.35-7.71-.987-2.006-.606-2.774-1.268-2.95-1.532.176-.265.944-.926 2.95-1.532zM18.63 43.64c-6.254 0-11.342-5.2-11.342-11.59s5.088-11.59 11.342-11.59c6.254 0 11.343 5.2 11.343 11.59S24.884 43.64 18.63 43.64zm24.082-6.93c-.112.227-.847.933-2.974 1.575-2.109.637-4.847.987-7.71.987-.197 0-.394-.002-.59-.005a15.043 15.043 0 001.328-3.362c3.19-.061 6.185-.52 8.499-1.308.54-.184 1.019-.379 1.447-.58v2.692zm0-6.72c-.112.228-.846.934-2.974 1.576-1.806.546-4.074.88-6.486.965a15.29 15.29 0 00-.263-3.35c3.107-.078 6.016-.533 8.276-1.303.54-.184 1.02-.378 1.447-.58v2.693zm0-6.718c-.112.227-.846.933-2.975 1.576-2.108.636-4.846.987-7.71.987h-.093a15.034 15.034 0 00-2.132-3.426c.729.043 1.472.067 2.225.067 3.465 0 6.746-.468 9.238-1.317.54-.184 1.02-.378 1.447-.58v2.693zm0-6.719c-.112.228-.846.933-2.975 1.576-2.108.637-4.846.987-7.71.987-2.863 0-5.602-.35-7.71-.987-2.128-.643-2.862-1.348-2.974-1.576v-2.693c.428.202.907.397 1.447.58 2.492.85 5.772 1.317 9.237 1.317s6.746-.468 9.238-1.316c.54-.184 1.02-.379 1.447-.581v2.693z"
            fill="#8E259C"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.74 28.672l3.965-3.966 2.829 2.828-3.966 3.966 3.966 3.966-2.829 2.828-3.966-3.966-3.966 3.966-2.828-2.828L15.91 31.5l-3.966-3.966 2.828-2.828 3.966 3.966z"
            fill="#8E259C"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 50 50" id="icon-brand">
        <path
            d="M44 12.094H31.373V6h-19.28v33.953H9a3 3 0 00-3 3V43h15.233v-.047a3 3 0 00-3-3H15.14V24.281h8.616v6.094H44l-6.215-9.14L44 12.093zM15.14 9.047h13.186v12.187H15.14V9.047zm23.104 18.281H26.803v-3.047h4.57v-9.14h6.871l-4.143 6.093 4.143 6.094z"
            fill="#8E259C"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 50 50" id="icon-check">
        <circle cx="25" cy="25" r="25" fill="#8E259C"/>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.562 14.548a2.5 2.5 0 01.39 3.514L25.7 32.129a3.5 3.5 0 01-5.367.118l-6.213-7.1a2.5 2.5 0 013.762-3.293l5.033 5.751 10.134-12.667a2.5 2.5 0 013.514-.39z"
            fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 18 16" id="icon-check-clear">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.354.267a1.5 1.5 0 01.38 2.087L9.47 14.288a2.5 2.5 0 01-3.953.204L.36 8.476A1.5 1.5 0 112.64 6.524l4.735 5.523 7.893-11.4a1.5 1.5 0 012.087-.38z"
            fill="#8E259C"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 20 21" id="icon-check-plus">
        <g clip-path="url(#icon-check-plus_clip0_79_2172)">
          <path
              d="M0 1.727a1 1 0 011-1h18a1 1 0 011 1v11a8 8 0 01-8 8H8a8 8 0 01-8-8v-11z"
              fill="#BF3131"
          />
          <path stroke="#fff" stroke-width="2" d="M10 4.727v10M5 9.727h10"/>
        </g>
        <defs></defs>
      </symbol>
      <clipPath id="icon-check-plus_clip0_79_2172">
        <path fill="#fff" transform="translate(0 .727)" d="M0 0h20v20H0z"/>
      </clipPath>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-cross">
        <path
            opacity=".3"
            d="M13.322 12l4.486-4.487A.653.653 0 0018 7.049a.651.651 0 00-.192-.464l-.393-.393A.65.65 0 0016.951 6a.65.65 0 00-.464.192L12 10.678 7.513 6.192A.65.65 0 007.05 6a.65.65 0 00-.464.192l-.393.393a.657.657 0 000 .928L10.679 12l-4.487 4.487A.652.652 0 006 16.95c0 .176.068.34.192.464l.393.393A.65.65 0 007.05 18a.65.65 0 00.464-.192L12 13.322l4.487 4.486a.651.651 0 00.464.192c.176 0 .34-.068.464-.192l.393-.393a.652.652 0 00.192-.464.652.652 0 00-.192-.464L13.322 12z"
            fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 18 25" id="icon-discount">
        <path
            d="M7.987 24.5c-.112 0-.224 0-.337-.109-.45-.218-.788-.653-.675-1.089l.9-7.733h-6.75C.45 15.57 0 15.133 0 14.48c0-.218.113-.436.225-.653L9.113.975C9.45.539 9.9.43 10.463.539c.45.218.787.654.675 1.09l-.9 7.732h6.637c.675 0 1.125.436 1.125 1.09 0 .217-.113.435-.225.653L8.888 23.955c-.113.327-.563.545-.9.545z"
            fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 84 84" id="icon-exchange">
        <g filter="url(#icon-exchange_filter0_d_33_1760)" fill="#8E259C">
          <path
              d="M42.043 58.563c-6.678 0-12.662-3.494-15.955-9.11h5.92v-3.437H20v12.03h3.43v-6.364a21.994 21.994 0 006.08 6.384A21.8 21.8 0 0042.042 62c5.861 0 11.361-2.29 15.487-6.447 4.117-4.15 6.384-9.673 6.384-15.553h-3.43c0 10.235-8.273 18.563-18.441 18.563zM60.57 21.953v6.365a21.994 21.994 0 00-6.08-6.384A21.798 21.798 0 0041.958 18c-5.865 0-11.379 2.288-15.526 6.444A21.878 21.878 0 0020 40h3.43c0-10.235 8.312-18.563 18.527-18.563 6.678 0 12.662 3.494 15.955 9.11h-5.92v3.437H64v-12.03h-3.43z"
          />
          <path
              d="M36 48V32h6.228c1.144 0 2.099.175 2.863.523.765.35 1.34.834 1.724 1.454.385.614.577 1.323.577 2.125 0 .625-.121 1.174-.364 1.648a3.207 3.207 0 01-1.003 1.156 4.05 4.05 0 01-1.443.633v.156a3.414 3.414 0 011.664.516c.521.318.944.763 1.268 1.336.324.568.486 1.245.486 2.031 0 .85-.205 1.607-.615 2.274-.405.661-1.005 1.184-1.8 1.57-.795.385-1.775.578-2.94.578H36zm3.289-2.766h2.68c.917 0 1.585-.18 2.006-.539.42-.364.63-.849.63-1.453 0-.442-.104-.833-.311-1.172a2.135 2.135 0 00-.889-.797c-.38-.192-.833-.289-1.36-.289H39.29v4.25zm0-6.539h2.438c.45 0 .85-.08 1.2-.242a2.01 2.01 0 00.835-.703c.208-.302.311-.664.311-1.086 0-.578-.2-1.044-.6-1.398-.395-.355-.956-.532-1.686-.532H39.29v3.961z"
          />
        </g>
        <defs>
          <filter
              id="icon-exchange_filter0_d_33_1760"
              x="0"
              y="0"
              width="84"
              height="84"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
                values="0 0 0 0 0.715257 0 0 0 0 0.103125 0 0 0 0 0.796875 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_33_1760"
            ></feBlend>
            <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_33_1760"
                result="shape"
            ></feBlend>
          </filter>
        </defs>
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-fb">
        <circle cx="12" cy="12" r="12" fill="#27295E"/>
        <path
            d="M13.886 7.19H15.2V4.902a16.972 16.972 0 00-1.915-.101c-1.895 0-3.194 1.192-3.194 3.383V10.2H8v2.56h2.091v6.44h2.565v-6.44h2.006l.319-2.56h-2.326V8.437c0-.74.2-1.246 1.23-1.246z"
            fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-in">
        <circle cx="12" cy="12" r="12" fill="#27295E"/>
        <path
            d="M18 17v-4.395c0-2.16-.465-3.81-2.985-3.81-1.215 0-2.025.66-2.355 1.29h-.03V8.99h-2.385V17h2.49v-3.975c0-1.05.195-2.055 1.485-2.055 1.275 0 1.29 1.185 1.29 2.115v3.9H18V17zM6.195 8.99h2.49V17h-2.49V8.99zM7.44 5A1.44 1.44 0 006 6.44c0 .795.645 1.455 1.44 1.455.795 0 1.44-.66 1.44-1.455A1.44 1.44 0 007.44 5z"
            fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-it">
        <circle cx="12" cy="12" r="12" fill="#27295E"/>
        <path
            d="M14.935 5.6h-5.87A3.469 3.469 0 005.6 9.065v5.87A3.469 3.469 0 009.064 18.4h5.87a3.469 3.469 0 003.466-3.465v-5.87A3.469 3.469 0 0014.935 5.6zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm3.583-6.174a1.035 1.035 0 010-2.069 1.035 1.035 0 010 2.069z"
            fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 80 81" id="icon-landing">
        <g filter="url(#icon-landing_filter0_d_33_1768)">
          <path
              d="M55.154 18.918H24.846a4.754 4.754 0 00-3.427 1.476A5.144 5.144 0 0020 23.958v29.92c0 1.336.51 2.618 1.42 3.563a4.754 4.754 0 003.426 1.477h30.308a4.754 4.754 0 003.427-1.477A5.144 5.144 0 0060 53.878v-29.92c0-1.337-.51-2.619-1.42-3.564a4.754 4.754 0 00-3.426-1.476zm1.615 34.96c0 .445-.17.873-.473 1.188a1.584 1.584 0 01-1.142.492H24.846c-.428 0-.84-.177-1.142-.492a1.715 1.715 0 01-.473-1.188v-29.92c0-.446.17-.873.473-1.188a1.585 1.585 0 011.142-.492h30.308c.428 0 .84.177 1.142.492.303.315.473.742.473 1.188v29.92z"
              fill="#8E259C"
          />
        </g>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.728 32.19L33.464 48.453l-2.475-2.475 16.264-16.263 2.475 2.475z"
            fill="#8E259C"
        />
        <g filter="url(#icon-landing_filter1_d_33_1768)">
          <circle cx="34" cy="32.918" r="3" fill="#8E259C"/>
        </g>
        <g filter="url(#icon-landing_filter2_d_33_1768)">
          <circle cx="47" cy="44.918" r="3" fill="#8E259C"/>
        </g>
        <defs>
          <filter
              id="icon-landing_filter0_d_33_1768"
              x="0"
              y=".918"
              width="80"
              height="80"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
                values="0 0 0 0 0.715257 0 0 0 0 0.103125 0 0 0 0 0.796875 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_33_1768"
            ></feBlend>
            <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_33_1768"
                result="shape"
            ></feBlend>
          </filter>
          <filter
              id="icon-landing_filter1_d_33_1768"
              x="11"
              y="11.918"
              width="46"
              height="46"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
                values="0 0 0 0 0.715257 0 0 0 0 0.103125 0 0 0 0 0.796875 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_33_1768"
            ></feBlend>
            <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_33_1768"
                result="shape"
            ></feBlend>
          </filter>
          <filter
              id="icon-landing_filter2_d_33_1768"
              x="24"
              y="23.918"
              width="46"
              height="46"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
                values="0 0 0 0 0.715257 0 0 0 0 0.103125 0 0 0 0 0.796875 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_33_1768"
            ></feBlend>
            <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_33_1768"
                result="shape"
            ></feBlend>
          </filter>
        </defs>
      </symbol>
      <symbol fill="none" viewBox="0 0 50 50" id="icon-links">
        <path
            d="M25 5C13.785 5 5 13.785 5 25s8.785 20 20 20 20-8.785 20-20S36.215 5 25 5zm-7.14 4.655c-2.502 3.88-3.58 9.124-3.766 13.783h-5.9c.546-6.204 4.312-11.342 9.666-13.783zM8.195 26.562h5.9c.185 4.662 1.263 9.903 3.765 13.783-5.354-2.44-9.12-7.58-9.665-13.782zm15.242 14.94c-4.257-2.018-6-9.931-6.215-14.94h6.215v14.94zm0-18.065h-6.215c.215-5 1.961-12.923 6.215-14.94v14.94zm18.369 0h-5.9c-.186-4.66-1.264-9.902-3.766-13.782 5.354 2.44 9.12 7.58 9.666 13.783zM26.563 8.498c4.257 2.018 6 9.932 6.215 14.94h-6.215V8.498zm0 33.006v-14.94h6.215c-.215 5-1.961 12.923-6.215 14.94zm5.577-1.158c2.502-3.88 3.58-9.123 3.766-13.782h5.9c-.546 6.203-4.312 11.341-9.666 13.782z"
            fill="#8E259C"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 50 50" id="icon-payment">
        <path
            d="M41.078 5H8.922C6.208 5 4 7.16 4 9.814v31.372C4 43.84 6.208 46 8.922 46h32.156C43.792 46 46 43.84 46 41.186V9.814C46 7.16 43.792 5 41.078 5zM7.281 9.814c0-.885.736-1.605 1.64-1.605h1.946a4.345 4.345 0 00-.305 1.605c0 .885-.735 1.605-1.64 1.605-.588 0-1.137.083-1.64.243V9.814zm0 18.693a5.41 5.41 0 001.64.242c.906 0 1.642.72 1.642 1.605 0 .568.107 1.107.304 1.605H8.922c-.905 0-1.64-.72-1.64-1.605v-1.847zM42.72 41.186c0 .885-.736 1.605-1.64 1.605H8.921c-.905 0-1.64-.72-1.64-1.605v-.838a4.998 4.998 0 001.64.276h32.156c.575 0 1.127-.098 1.64-.276v.838zm0-5.376c0 .885-.736 1.605-1.64 1.605H8.921c-.905 0-1.64-.72-1.64-1.605v-.918a4.998 4.998 0 001.64.276h32.156c.575 0 1.127-.098 1.64-.276v.918zm0-5.456c0 .885-.736 1.605-1.64 1.605h-1.946a4.345 4.345 0 00.304-1.605c0-.885.736-1.604 1.641-1.604.588 0 1.137-.084 1.64-.243v1.847zm0-7.381c0 2.567-1.068 2.567-1.64 2.567-2.715 0-4.923 2.16-4.923 4.814 0 .93-1.035 1.605-2.46 1.605H16.304c-1.426 0-2.461-.675-2.461-1.605 0-2.654-2.208-4.814-4.922-4.814-.573 0-1.64 0-1.64-2.567v-5.777c0-2.568 1.067-2.568 1.64-2.568 2.714 0 4.922-2.16 4.922-4.814 0-.93 1.035-1.605 2.46-1.605h17.391c1.426 0 2.461.675 2.461 1.605 0 2.655 2.208 4.814 4.922 4.814.573 0 1.64 0 1.64 2.568v5.777zm0-11.311a5.41 5.41 0 00-1.64-.243c-.906 0-1.642-.72-1.642-1.605 0-.568-.107-1.107-.304-1.605h1.945c.905 0 1.64.72 1.64 1.605v1.848z"
            fill="#8E259C"
        />
        <path
            d="M38.043 21.68c.906 0 1.64-.72 1.64-1.606 0-.886-.734-1.604-1.64-1.604-.906 0-1.64.718-1.64 1.604 0 .887.734 1.605 1.64 1.605zM25 11.248c-4.568 0-8.285 3.96-8.285 8.826 0 4.867 3.717 8.826 8.285 8.826s8.285-3.96 8.285-8.826c0-4.866-3.717-8.826-8.285-8.826zm0 14.443c-2.76 0-5.004-2.52-5.004-5.617s2.245-5.616 5.004-5.616c2.76 0 5.004 2.52 5.004 5.616 0 3.097-2.245 5.617-5.004 5.617zM11.957 21.68c.906 0 1.64-.72 1.64-1.606 0-.886-.734-1.604-1.64-1.604-.906 0-1.64.718-1.64 1.604 0 .887.734 1.605 1.64 1.605z"
            fill="#8E259C"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 14 19" id="icon-place">
        <path
            d="M7 0C3.14 0 0 3.263 0 7.273a7.49 7.49 0 00.944 3.65c.144.258.305.508.478.746L6.696 19h.608l5.274-7.331c.173-.238.334-.488.478-.746A7.49 7.49 0 0014 7.273C14 3.263 10.86 0 7 0zm0 9.686c-1.28 0-2.321-1.083-2.321-2.413 0-1.33 1.041-2.412 2.321-2.412 1.28 0 2.321 1.082 2.321 2.412 0 1.33-1.041 2.413-2.321 2.413z"
            fill="#8E259C"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 50 50" id="icon-platform">
        <path
            d="M36.875 21.406v3.125H33.75v-3.125h3.125zM40.313 5h-9.454a4.693 4.693 0 00-4.687 4.688h3.125c0-.862.7-1.563 1.562-1.563h9.453c.862 0 1.563.7 1.563 1.563v16.015c0 .862-.7 1.563-1.563 1.563H30.86c-.861 0-1.562-.701-1.562-1.563h-3.125a4.693 4.693 0 004.687 4.688h9.453A4.693 4.693 0 0045 25.703V9.688A4.693 4.693 0 0040.312 5zm1.073 28.281L45 41.953V45H5v-3.047l3.125-7.499V12.578h21.281v3.125H11.25v17.578h30.136zm.196 8.594l-2.279-5.469H10.697l-2.279 5.469h11.895v-1.484h9.375v1.484h11.894z"
            fill="#8E259C"
        />
        <path d="M26.172 25.703h3.125V18h-3.125v7.703z" fill="#8E259C"/>
      </symbol>
      <symbol fill="none" viewBox="0 0 69 58" id="icon-staking">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 41.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 3.5a7 7 0 100-14 7 7 0 000 14zM35 18.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 3.5a7 7 0 100-14 7 7 0 000 14z"
            fill="#8E259C"
        />
        <g filter="url(#icon-staking_filter0_d_33_1791)">
          <path
              d="M22.227 34.298L32.49 19.035"
              stroke="#8E259C"
              stroke-width="3"
          />
        </g>
        <g filter="url(#icon-staking_filter1_d_33_1791)">
          <path
              d="M47.49 33.298L37.227 19.035"
              stroke="#8E259C"
              stroke-width="3"
          />
        </g>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50 41.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 3.5a7 7 0 100-14 7 7 0 000 14z"
            fill="#8E259C"
        />
        <defs>
          <filter
              id="icon-staking_filter0_d_33_1791"
              x=".982"
              y=".198"
              width="52.753"
              height="56.938"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
                values="0 0 0 0 0.715257 0 0 0 0 0.103125 0 0 0 0 0.796875 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_33_1791"
            ></feBlend>
            <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_33_1791"
                result="shape"
            ></feBlend>
          </filter>
          <filter
              id="icon-staking_filter1_d_33_1791"
              x="16.009"
              y=".159"
              width="52.699"
              height="56.016"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
                values="0 0 0 0 0.715257 0 0 0 0 0.103125 0 0 0 0 0.796875 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_33_1791"
            ></feBlend>
            <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_33_1791"
                result="shape"
            ></feBlend>
          </filter>
        </defs>
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-tg">
        <circle cx="12" cy="12" r="12" fill="#27295E"/>
        <path
            d="M9.023 14.055l-.212 2.903c.303 0 .434-.127.591-.28l1.42-1.323 2.944 2.102c.54.293.92.139 1.065-.484l1.932-8.826c.172-.778-.288-1.082-.814-.891L4.594 11.494c-.775.293-.763.715-.131.905l2.903.88 6.743-4.113c.317-.205.605-.092.368.113l-5.454 4.776z"
            fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 82 80" id="icon-trading">
        <g filter="url(#icon-trading_filter0_d_33_1783)">
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 18a3.5 3.5 0 013.5 3.5v33h35A3.5 3.5 0 0162 58H20V18z"
              fill="#8E259C"
          />
        </g>
        <g filter="url(#icon-trading_filter1_d_33_1783)">
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M59.953 23A2 2 0 0162 24.952v11.001a2 2 0 01-3.999.095V29.5L44.033 42.862 36 36.828 29.83 43A2 2 0 1127 40.172l9-9 7.966 5.966 10.755-10.024L48 27a2 2 0 01-.096-3.999L59.953 23z"
              fill="#8E259C"
          />
        </g>
        <defs>
          <filter
              id="icon-trading_filter0_d_33_1783"
              x="0"
              y="0"
              width="82"
              height="80"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
                values="0 0 0 0 0.715257 0 0 0 0 0.103125 0 0 0 0 0.796875 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_33_1783"
            ></feBlend>
            <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_33_1783"
                result="shape"
            ></feBlend>
          </filter>
          <filter
              id="icon-trading_filter1_d_33_1783"
              x="6.415"
              y="4.999"
              width="75.586"
              height="60.586"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            ></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix
                values="0 0 0 0 0.715257 0 0 0 0 0.103125 0 0 0 0 0.796875 0 0 0 1 0"
            ></feColorMatrix>
            <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_33_1783"
            ></feBlend>
            <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_33_1783"
                result="shape"
            ></feBlend>
          </filter>
        </defs>
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-tw">
        <circle cx="12" cy="12" r="12" fill="#27295E"/>
        <path
            d="M19 8.302c-.52.221-1.075.367-1.654.439a2.779 2.779 0 001.263-1.535 5.857 5.857 0 01-1.82.672A2.923 2.923 0 0014.692 7c-1.589 0-2.868 1.247-2.868 2.776 0 .22.02.432.067.633a8.219 8.219 0 01-5.916-2.903 2.724 2.724 0 00-.393 1.403c0 .961.512 1.813 1.275 2.306a2.908 2.908 0 01-1.297-.341v.03c0 1.349.995 2.47 2.3 2.727a2.956 2.956 0 01-.753.092c-.184 0-.37-.01-.543-.048.372 1.1 1.427 1.907 2.681 1.934a5.893 5.893 0 01-3.558 1.184c-.236 0-.461-.01-.687-.038A8.282 8.282 0 009.403 18c5.281 0 8.169-4.23 8.169-7.898 0-.123-.004-.241-.01-.359.57-.39 1.048-.879 1.438-1.44z"
            fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-yt">
        <circle cx="12" cy="12" r="12" fill="#27295E"/>
        <path
            d="M19.197 10.584a5.296 5.296 0 00-.563-2.564 1.802 1.802 0 00-1.062-.62 48.194 48.194 0 00-5.171-.193c-1.72-.03-3.44.033-5.153.187a1.77 1.77 0 00-.902.459c-.556.515-.617 1.396-.68 2.141a30.107 30.107 0 000 4.021c.019.42.08.836.186 1.242.075.313.225.603.439.844.251.25.572.419.92.484 1.332.165 2.674.233 4.016.205 2.162.03 4.059 0 6.301-.174.357-.061.687-.23.946-.484.173-.174.302-.387.377-.62.22-.682.329-1.395.32-2.11.026-.348.026-2.446.026-2.818zm-8.192 3.19V9.931l3.657 1.93c-1.026.57-2.379 1.216-3.657 1.911z"
            fill="#fff"
        />
      </symbol>
    </defs>
  </svg>
</template>
