enum EStatusCode {
	"NotFound" = 404,
    "ServerError" = 500,
}

interface IErrorPlugProps extends IComponent {
    errorType?: EStatusCode;
}