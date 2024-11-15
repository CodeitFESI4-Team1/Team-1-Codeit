const validateFile = (file: File | string) => {
  // 문자열(기존 URL)인 경우 검증 통과
  if (typeof file === 'string') return true;

  // 파일인 경우 상세 검증 수행
  if (file instanceof File) {
    // 파일 확장자 검증
    const extension = file.name.split('.').pop()?.toLowerCase();
    const validExtensions = ['jpg', 'jpeg', 'png'];

    if (!extension || !validExtensions.includes(extension)) {
      return 'JPG, PNG 파일만 업로드 가능합니다.';
    }

    // 파일 크기 검증
    if (file.size > 5 * 1024 * 1024) {
      return '파일 크기는 5MB 이하여야 합니다.';
    }

    // MIME 타입 검증
    if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
      return '올바른 이미지 형식이 아닙니다.';
    }

    return true;
  }
  return false;
};

export default validateFile;
