enum EStatusCode {
	"NotFound" = 404,
    "ServerError" = 500,
    "ClientSide" = 0
}

interface IErrorPlugProps extends IComponent {
    errorType?: EStatusCode;
}