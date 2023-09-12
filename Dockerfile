FROM nginx:1.13.0-alpine
COPY dist/ /usr/share/nginx/html
VOLUME /usr/share/nginx/htmls

EXPOSE 8080
