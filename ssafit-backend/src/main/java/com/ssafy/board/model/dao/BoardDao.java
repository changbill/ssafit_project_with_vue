package com.ssafy.board.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.ssafy.board.model.dto.Board;

// DB 너낌 나게 작성해라아 by 띵쌤
public interface BoardDao {
	// 게시글 전체 조회
	List<Board> selectAll(int video_id);
	
	// 게시글 등록
	void insertBoard(Board board);
	
	// 게시글 상세 조회 (한 개만 조회한다아)
	Board selectOne(@Param(value = "video_id") int video_id, @Param(value = "id") int id);
	
	// 게시글 수정
	void updateBoard(Board board);
	
	// 게시글 삭제
	void deleteBoard(@Param(value = "id") int id,  @Param(value = "video_id") int video_id);
	
	// 조회수 증가
	void updateViewCnt(@Param(value = "video_id") int video_id, @Param(value = "id") int id);
}
