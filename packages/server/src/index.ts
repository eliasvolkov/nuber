import { Options } from 'graphql-yoga';
import app from './app';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/playground';

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT,
}
app.start(appOptions, () => console.log(`listening on ${PORT}`));
