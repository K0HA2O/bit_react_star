export default function 디테일 (props) {

    return (
        <div>
            <h1>테스트</h1>

            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
                onClick={() => props.handlerReset()}>

                <div style={{
                    width: '100px',
                    height: '50px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {props.detail}
                </div>
            </div>
        </div>
    )
}