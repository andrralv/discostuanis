import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        // @ts-ignore
        <div id="error-page">
            <h1>🕵🏼‍♀️ ALTO!</h1>
            <p>Que papi que anda buscando mejor devuelvase no le jale el rabo a la ternera</p>
            <p>
                <a href={'/'}>{'Volver'}</a>
            </p>
        </div>
    );
}