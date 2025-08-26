function toggleFullscreen() {
    const box = document.getElementById('my-box');
    
    if (!document.fullscreenElement) {
        // ถ้ายังไม่ได้อยู่ในโหมดเต็มหน้าจอ ให้เข้าสู่โหมดเต็มหน้าจอ
        if (box.requestFullscreen) {
            box.requestFullscreen();
        } else if (box.webkitRequestFullscreen) { /* Safari */
            box.webkitRequestFullscreen();
        }
    } else {
        // ถ้าอยู่ในโหมดเต็มหน้าจอแล้ว ให้ออก
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
            
        }
    }
}