import React from "react"

export function ThirdParty({ scale = 1, color = "black" }) {
  return (
    <svg
      width={512 * scale}
      height={455 * scale}
      viewBox="0 0 512 455"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_scrap" fill="none" fillRule="evenodd">
        <g id="third_party" fill={color} fillRule="nonzero">
          <path
            d="M345.500555,349.478357 L345.500555,303.449501 L385.278579,326.748058 L345.500555,349.478357 Z M255.715871,244.918979 C242.848433,244.918979 232.417314,234.48786 232.417314,221.620422 C232.417314,208.752984 242.848433,198.321865 255.715871,198.321865 C268.583309,198.321865 279.014428,208.752984 279.014428,221.620422 C279.014428,234.48786 268.583309,244.918979 255.715871,244.918979 Z M305.154273,348.341842 L287.538291,331.294118 L287.538291,276.741398 L284.128746,276.741398 L284.128746,327.884573 L210.823529,254.011099 C214.233074,250.601554 218.779134,248.328524 223.893452,248.328524 L288.106548,248.328524 C297.766926,248.328524 305.722531,256.284129 305.722531,265.944506 L305.722531,345.500555 C305.722531,346.63707 305.154273,347.773585 305.154273,348.341842 Z M50.0066593,244.918979 C37.1392215,244.918979 26.7081021,234.48786 26.7081021,221.620422 C26.7081021,208.752984 37.1392215,198.321865 50.0066593,198.321865 C62.8740971,198.321865 73.3052164,208.752984 73.3052164,221.620422 C73.3052164,234.48786 62.8740971,244.918979 50.0066593,244.918979 Z M81.8290788,248.328524 C91.4894562,248.328524 99.445061,256.284129 100.013319,265.944506 L100.013319,346.068812 C100.013319,351.18313 96.0355161,355.160932 90.9211987,355.160932 C85.8068812,355.160932 81.8290788,351.18313 81.8290788,346.068812 L81.8290788,276.741398 L78.4195339,276.741398 L78.4195339,355.160932 L78.4195339,441.536071 C78.4195339,448.923418 72.7369589,454.605993 65.3496115,454.605993 C57.9622642,454.605993 52.2796892,448.923418 52.2796892,441.536071 L52.2796892,355.160932 L48.3018868,355.160932 L48.3018868,441.536071 C48.3018868,448.923418 42.6193119,454.605993 35.2319645,454.605993 L34.663707,454.605993 C27.2763596,454.605993 21.5937847,448.923418 21.5937847,441.536071 L21.5937847,355.160932 L21.5937847,276.741398 L18.1842397,276.741398 L18.1842397,346.068812 C18.1842397,351.18313 14.2064373,355.160932 9.09211987,355.160932 C3.97780244,355.160932 0,351.18313 0,346.068812 L0,265.944506 C0,256.284129 7.95560488,248.328524 17.6159822,248.328524 L81.8290788,248.328524 Z M461.993341,244.918979 C449.125903,244.918979 438.694784,234.48786 438.694784,221.620422 C438.694784,208.752984 449.125903,198.321865 461.993341,198.321865 C474.860779,198.321865 485.291898,208.752984 485.291898,221.620422 C485.291898,234.48786 474.860779,244.918979 461.993341,244.918979 Z M493.81576,248.328524 C503.476138,248.328524 511.431743,256.284129 512,265.944506 L512,346.068812 C512,351.18313 508.022198,355.160932 502.90788,355.160932 C497.793563,355.160932 493.81576,351.18313 493.81576,346.068812 L493.81576,276.741398 L490.406215,276.741398 L490.406215,355.160932 L490.406215,441.536071 C490.406215,448.923418 484.72364,454.605993 477.336293,454.605993 C469.948946,454.605993 464.266371,448.923418 464.266371,441.536071 L464.266371,355.160932 L460.288568,355.160932 L460.288568,441.536071 C460.288568,448.923418 454.605993,454.605993 447.218646,454.605993 L446.650388,454.605993 C439.263041,454.605993 433.580466,448.923418 433.580466,441.536071 L433.580466,355.160932 L433.580466,276.741398 L430.170921,276.741398 L430.170921,346.068812 C430.170921,351.18313 426.193119,355.160932 421.078801,355.160932 C415.964484,355.160932 411.986681,351.18313 411.986681,346.068812 L411.986681,265.944506 C411.986681,256.284129 419.942286,248.328524 429.602664,248.328524 L493.81576,248.328524 Z M139.223085,349.478357 L139.223085,303.449501 L179.569367,326.748058 L139.223085,349.478357 Z M255.715871,14.2064373 C227.871254,14.2064373 201.163152,19.3207547 175.591565,30.1176471 C151.156493,40.9145394 128.994451,55.6892342 110.241953,74.4417314 C90.9211987,93.1942286 76.1465039,115.356271 65.917869,139.791343 L52.8479467,134.108768 C63.6448391,107.968923 80.1243063,84.6703663 100.013319,64.2130966 C119.902331,43.7558269 143.769145,28.4128746 169.90899,17.0477248 C197.18535,5.68257492 226.166482,0 255.715871,0 C285.265261,0 314.246393,5.68257492 341.522752,17.0477248 C367.662597,27.8446171 390.961154,43.7558269 411.418424,64.2130966 C423.920089,76.7147614 435.285239,90.9211987 444.377358,106.264151 L457.447281,50.5749168 L471.085461,53.9844617 L452.332963,136.950055 L370.503885,111.946726 L374.481687,98.8768036 L433.580466,117.061043 C424.488346,101.149834 413.691454,86.9433962 401.189789,74.4417314 C382.437292,55.1209767 360.27525,40.3462819 335.840178,30.1176471 C310.26859,19.8890122 283.560488,14.2064373 255.715871,14.2064373 Z M135.245283,218.779134 L145.473918,209.118757 L366.526082,429.602664 L356.297447,439.831299 L284.128746,367.662597 L284.128746,441.536071 C284.128746,448.923418 278.446171,454.605993 271.058824,454.605993 C263.671476,454.605993 257.988901,448.923418 257.988901,441.536071 L257.988901,355.160932 L254.011099,355.160932 L254.011099,441.536071 C254.011099,448.923418 248.328524,454.605993 240.941176,454.605993 L240.372919,454.605993 C232.985572,454.605993 227.302997,448.923418 227.302997,441.536071 L227.302997,354.592675 L227.302997,310.836848 L224.461709,307.427303 L224.461709,346.068812 C224.461709,351.18313 220.483907,355.160932 215.369589,355.160932 C210.255272,355.160932 206.277469,351.18313 206.277469,346.068812 L206.277469,289.811321 L135.245283,218.779134 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  )
}
