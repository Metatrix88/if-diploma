import React from 'react';

// styles
import { useSpriteStyles } from './Sprite.styles';

export const Sprite = () => {
  const classes = useSpriteStyles();
  return (
    <svg className={classes.root}>
      <symbol id="error" viewBox="0 0 24 24">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      </symbol>
      <symbol id="logo" viewBox="0 0 172 32">
        <path d="M13.405 16.265H5.98v8.495H0V2.314h14.49l.558 4.727H5.98v4.496h6.866l.559 4.728ZM16.365 16.661c0-2.689.876-4.771 2.628-6.248 1.774-1.498 3.91-2.248 6.407-2.248 2.628 0 4.786.728 6.472 2.182 1.709 1.455 2.563 3.614 2.563 6.48 0 2.688-.887 4.749-2.661 6.181-1.774 1.41-3.943 2.116-6.506 2.116-2.562 0-4.687-.694-6.373-2.083-1.687-1.388-2.53-3.515-2.53-6.38Zm6.177 0c0 1.08.24 1.95.722 2.612.482.639 1.172.958 2.07.958.942 0 1.665-.286 2.169-.86.503-.572.755-1.42.755-2.545 0-1.08-.24-1.972-.723-2.677-.481-.727-1.171-1.091-2.07-1.091-.941 0-1.664.32-2.168.959-.504.639-.756 1.52-.756 2.644ZM48.016 24.76l-2.793-3.438-2.727 3.438h-6.735l5.848-7.967-5.848-7.305 6.177-.827 3.088 3.934 3.088-3.868h6.604l-6.078 8.397 6.078 7.636h-6.702ZM80.589 24.76H64.555V2.281h5.98v17.752h9.495l.559 4.727ZM85.857 6.545c-.876 0-1.632-.32-2.267-.958-.635-.64-.953-1.4-.953-2.281 0-.904.318-1.675.953-2.314C84.225.33 84.981 0 85.857 0c.898 0 1.665.33 2.3.992.657.639.986 1.41.986 2.314 0 .881-.329 1.642-.986 2.28a3.125 3.125 0 0 1-2.3.96ZM82.9 24.76V8.727h5.98V24.76H82.9ZM92.815 24.76V1.785l5.98-.364v7.604a8.13 8.13 0 0 1 1.543-.595 7.224 7.224 0 0 1 1.939-.265c2.563 0 4.479.794 5.75 2.38 1.27 1.587 1.905 3.57 1.905 5.95 0 2.403-.635 4.442-1.905 6.117-1.249 1.675-3.275 2.512-6.079 2.512-.898 0-1.807-.187-2.727-.562a10.977 10.977 0 0 1-2.398-1.355l-.986 1.553h-3.022Zm10.94-8.132c0-.948-.262-1.774-.788-2.48-.504-.726-1.238-1.09-2.201-1.09-.241 0-.559.044-.953.132a5.031 5.031 0 0 0-1.019.33v5.72c.307.286.69.529 1.15.727.46.176.898.264 1.314.264.898 0 1.534-.396 1.906-1.19.394-.815.591-1.62.591-2.413ZM112.9 24.76v-16h2.99l1.445 1.62c.657-.44 1.435-.826 2.333-1.157a7.752 7.752 0 0 1 2.694-.496l1.216 4.827c-.789 0-1.599.11-2.431.33a6.253 6.253 0 0 0-2.267 1.124v9.752h-5.98ZM129.871 19.372c0 .264.109.485.328.661.219.176.471.264.756.264.35 0 .701-.077 1.051-.23a4.61 4.61 0 0 0 1.052-.662v-1.19h-1.84c-.395 0-.723.11-.986.33-.241.199-.361.474-.361.827Zm-4.469-9.686c.833-.375 1.884-.716 3.154-1.025a15.338 15.338 0 0 1 3.877-.496c2.169 0 3.812.606 4.929 1.818 1.117 1.213 1.675 2.832 1.675 4.86v9.917h-2.661l-1.084-1.223c-.482.485-1.117.87-1.906 1.157a7.35 7.35 0 0 1-2.53.43c-2.015 0-3.515-.507-4.501-1.52-.986-1.014-1.478-2.348-1.478-4 0-1.742.58-3.009 1.741-3.802 1.161-.816 2.661-1.223 4.501-1.223h1.906c-.088-.485-.318-.86-.69-1.125-.373-.264-.833-.396-1.38-.396-.548 0-1.194.099-1.939.297-.744.177-1.423.397-2.037.662l-1.577-4.331ZM142.643 24.76v-16h2.99l1.445 1.62c.657-.44 1.435-.826 2.333-1.157a7.752 7.752 0 0 1 2.694-.496l1.216 4.827c-.789 0-1.599.11-2.431.33a6.253 6.253 0 0 0-2.267 1.124v9.752h-5.98ZM159.811 24.826l.131-.363-5.98-15.14 5.849-.596 3.187 9.058 3.055-9.058H172l-6.998 17.918c-.504 1.3-1.446 2.424-2.826 3.372-1.38.97-2.858 1.63-4.435 1.983l-2.004-4.661c.788-.33 1.621-.716 2.497-1.157.876-.419 1.401-.87 1.577-1.356Z"/>
      </symbol>
      <symbol id="search" viewBox="0 0 18 18" >
        <path fill="#B5B5B5" d="M12.864 11.32h-.813l-.288-.277A6.66 6.66 0 0 0 13.38 6.69a6.69 6.69 0 1 0-6.69 6.69 6.66 6.66 0 0 0 4.354-1.617l.278.289v.813L16.467 18 18 16.467l-5.136-5.146Zm-6.174 0a4.625 4.625 0 0 1-4.632-4.63A4.625 4.625 0 0 1 6.69 2.058a4.625 4.625 0 0 1 4.63 4.632 4.625 4.625 0 0 1-4.63 4.63Z"/>
      </symbol>
      <symbol id="night" viewBox="0 0 30 30">
        <path d="M25.61 10.61V4.39h-6.22L15 0l-4.39 4.39H4.39v6.22L0 15l4.39 4.39v6.22h6.22L15 30l4.39-4.39h6.22v-6.22L30 15l-4.39-4.39ZM15 22.958a7.924 7.924 0 0 1-3.316-.73c2.732-1.26 4.642-4.018 4.642-7.228s-1.91-5.968-4.642-7.228A7.924 7.924 0 0 1 15 7.042c4.39 0 7.958 3.568 7.958 7.958 0 4.39-3.568 7.958-7.958 7.958Z" />
      </symbol>
    </svg>
  );
};