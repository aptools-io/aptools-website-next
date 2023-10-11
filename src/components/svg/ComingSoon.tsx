import * as React from "react";
import type { SVGProps } from "react";

const SvgComingSoon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={195} height={55} fill='none' {...props}>
        <path fill='#7D7D7D' d='M35.047 38.797v-7.025L16.189 41.996v-3.875l22-12.125v16h-6.286v-3.2h3.144Z' />
        <path fill='#7D7D7D' fillRule='evenodd' d='M4.141 48.246a1 1 0 0 0 .866 1.5h49.364a1 1 0 0 0 .866-1.5L30.555 5.496a1 1 0 0 0-1.732 0L4.141 48.246ZM34.02 3.496l24.682 42.75c1.925 3.333-.481 7.5-4.33 7.5H5.007c-3.849 0-6.254-4.167-4.33-7.5L25.36 3.496c1.925-3.333 6.736-3.333 8.66 0Z' clipRule='evenodd' />
        <path fill='#7D7D7D' d='M82.258 24.455c-2.219 0-4.139-.48-5.76-1.44-1.6-.981-2.837-2.336-3.712-4.064-.875-1.75-1.312-3.765-1.312-6.048 0-2.304.437-4.32 1.312-6.048.875-1.75 2.112-3.115 3.712-4.096 1.621-.981 3.541-1.472 5.76-1.472 2.624 0 4.768.64 6.432 1.92 1.664 1.28 2.72 3.072 3.168 5.376h-3.776c-.299-1.301-.939-2.336-1.92-3.104-.981-.768-2.293-1.152-3.936-1.152-2.24 0-4.01.768-5.312 2.304-1.301 1.515-1.952 3.605-1.952 6.272 0 2.645.65 4.725 1.952 6.24 1.301 1.515 3.072 2.272 5.312 2.272 1.643 0 2.955-.363 3.936-1.088.981-.725 1.621-1.717 1.92-2.976h3.776c-.448 2.219-1.504 3.957-3.168 5.216-1.664 1.259-3.808 1.888-6.432 1.888ZM104.922 24.455c-2.218 0-4.16-.49-5.824-1.472-1.664-.981-2.965-2.336-3.904-4.064-.938-1.75-1.408-3.765-1.408-6.048s.47-4.288 1.408-6.016c.94-1.75 2.24-3.115 3.904-4.096 1.664-.981 3.606-1.472 5.824-1.472 2.219 0 4.16.49 5.824 1.472 1.664.981 2.955 2.347 3.872 4.096.939 1.728 1.408 3.733 1.408 6.016s-.469 4.299-1.408 6.048a10.145 10.145 0 0 1-3.872 4.064c-1.664.981-3.605 1.472-5.824 1.472Zm0-3.04c1.536 0 2.87-.341 4-1.024 1.152-.683 2.048-1.664 2.688-2.944.64-1.28.96-2.805.96-4.576 0-1.77-.32-3.296-.96-4.576-.64-1.28-1.536-2.261-2.688-2.944-1.13-.683-2.464-1.024-4-1.024s-2.88.341-4.032 1.024c-1.152.683-2.048 1.664-2.688 2.944-.618 1.28-.928 2.805-.928 4.576 0 1.77.31 3.296.928 4.576.64 1.28 1.536 2.261 2.688 2.944 1.152.683 2.496 1.024 4.032 1.024ZM118.805 24.071v-22.4h4l7.584 14.912 7.552-14.912h4v22.4h-3.392V7.527l-6.848 13.344h-2.624l-6.88-13.312v16.512h-3.392ZM145.493 24.071v-22.4h3.392v22.4h-3.392ZM152.43 24.071v-22.4h3.392l11.232 16.864V1.671h3.392v22.4h-3.392L155.822 7.207v16.864h-3.392ZM183.721 24.455c-2.112 0-3.958-.48-5.536-1.44-1.579-.96-2.806-2.304-3.68-4.032-.875-1.728-1.312-3.744-1.312-6.048 0-2.283.448-4.299 1.344-6.048.896-1.75 2.165-3.115 3.808-4.096 1.664-1.003 3.626-1.504 5.888-1.504 2.56 0 4.693.619 6.4 1.856 1.706 1.237 2.816 2.944 3.328 5.12h-3.84c-.342-1.195-1.014-2.133-2.016-2.816-1.003-.683-2.294-1.024-3.872-1.024-2.347 0-4.192.757-5.536 2.272-1.344 1.515-2.016 3.605-2.016 6.272 0 2.667.661 4.747 1.984 6.24 1.322 1.493 3.082 2.24 5.28 2.24 2.218 0 3.882-.63 4.992-1.888 1.13-1.259 1.792-2.933 1.984-5.024h-6.08v-2.624h9.504v12.16h-3.104l-.288-3.296c-.747 1.173-1.686 2.08-2.816 2.72-1.131.64-2.603.96-4.416.96ZM79.666 53.455c-1.643 0-3.083-.288-4.32-.864-1.237-.576-2.208-1.397-2.912-2.464-.683-1.067-1.035-2.336-1.056-3.808h3.584c.021 1.195.437 2.208 1.248 3.04.81.832 1.952 1.248 3.424 1.248 1.301 0 2.315-.31 3.04-.928.747-.64 1.12-1.45 1.12-2.432 0-.79-.181-1.43-.544-1.92-.341-.49-.821-.896-1.44-1.216-.597-.32-1.29-.608-2.08-.864s-1.621-.533-2.496-.832c-1.728-.576-3.03-1.323-3.904-2.24-.853-.917-1.28-2.123-1.28-3.616-.021-1.259.267-2.357.864-3.296.619-.939 1.472-1.664 2.56-2.176 1.11-.533 2.4-.8 3.872-.8 1.45 0 2.72.267 3.808.8 1.11.533 1.973 1.28 2.592 2.24.619.939.939 2.037.96 3.296h-3.584c0-.576-.15-1.12-.448-1.632-.299-.533-.736-.97-1.312-1.312-.576-.341-1.28-.512-2.112-.512-1.067-.021-1.952.245-2.656.8-.683.555-1.024 1.323-1.024 2.304 0 .875.256 1.547.768 2.016.512.47 1.216.864 2.112 1.184.896.299 1.92.65 3.072 1.056 1.11.363 2.101.8 2.976 1.312a5.89 5.89 0 0 1 2.08 2.016c.533.832.8 1.888.8 3.168 0 1.13-.288 2.187-.864 3.168-.576.96-1.44 1.75-2.592 2.368-1.152.597-2.57.896-4.256.896ZM100.422 53.455c-2.218 0-4.16-.49-5.824-1.472-1.664-.981-2.965-2.336-3.904-4.064-.938-1.75-1.408-3.765-1.408-6.048s.47-4.288 1.408-6.016c.94-1.75 2.24-3.115 3.904-4.096 1.664-.981 3.606-1.472 5.824-1.472 2.219 0 4.16.49 5.824 1.472 1.664.981 2.955 2.347 3.872 4.096.939 1.728 1.408 3.733 1.408 6.016s-.469 4.299-1.408 6.048a10.145 10.145 0 0 1-3.872 4.064c-1.664.981-3.605 1.472-5.824 1.472Zm0-3.04c1.536 0 2.87-.341 4-1.024 1.152-.683 2.048-1.664 2.688-2.944.64-1.28.96-2.805.96-4.576 0-1.77-.32-3.296-.96-4.576-.64-1.28-1.536-2.261-2.688-2.944-1.13-.683-2.464-1.024-4-1.024s-2.88.341-4.032 1.024c-1.152.683-2.048 1.664-2.688 2.944-.618 1.28-.928 2.805-.928 4.576 0 1.77.31 3.296.928 4.576.64 1.28 1.536 2.261 2.688 2.944 1.152.683 2.496 1.024 4.032 1.024ZM124.641 53.455c-2.218 0-4.16-.49-5.824-1.472-1.664-.981-2.965-2.336-3.904-4.064-.938-1.75-1.408-3.765-1.408-6.048s.47-4.288 1.408-6.016c.939-1.75 2.24-3.115 3.904-4.096 1.664-.981 3.606-1.472 5.824-1.472 2.219 0 4.16.49 5.824 1.472 1.664.981 2.955 2.347 3.872 4.096.939 1.728 1.408 3.733 1.408 6.016s-.469 4.299-1.408 6.048a10.145 10.145 0 0 1-3.872 4.064c-1.664.981-3.605 1.472-5.824 1.472Zm0-3.04c1.536 0 2.87-.341 4-1.024 1.152-.683 2.048-1.664 2.688-2.944.64-1.28.96-2.805.96-4.576 0-1.77-.32-3.296-.96-4.576-.64-1.28-1.536-2.261-2.688-2.944-1.13-.683-2.464-1.024-4-1.024s-2.88.341-4.032 1.024c-1.152.683-2.048 1.664-2.688 2.944-.618 1.28-.928 2.805-.928 4.576 0 1.77.31 3.296.928 4.576.64 1.28 1.536 2.261 2.688 2.944 1.152.683 2.496 1.024 4.032 1.024ZM138.524 53.071v-22.4h3.392l11.232 16.864V30.671h3.392v22.4h-3.392l-11.232-16.864v16.864h-3.392Z' />
    </svg>
);
export default SvgComingSoon;
